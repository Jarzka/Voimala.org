(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require ["marked" :as marked]
            ["markdown-yaml-metadata-parser" :as metadata-parser]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [pikseli.styles.views.blog :as blog-style]
            [pikseli.utils.dom :as dom]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]

            [clojure.string :as string]
            [pikseli.styles.layout :as layout]))

(defn get-posts [files ok error]
  (doseq [file files]
    (ajax/GET!
      (str "blog/" file ".md")
      {:ok ok
       :error error})))

(defn get-post-files [ok error]
  (ajax/GET!
    "blog/posts.txt"
    {:ok (fn [response]
           (let [lines (string/split-lines response)
                 lines-stored (sort lines)]
             (ok lines-stored)))
     :error error}))

(defn post-list [posts]
  (let [parsed-posts (mapv #(js->clj (metadata-parser %) :keywordize-keys true) posts)]
    (r/create-class
      {:component-did-mount (fn []
                              (doseq [post-index (range 0 (count parsed-posts))]
                                (let [post (get parsed-posts post-index)
                                      content (:content post)
                                      element (.getElementById js/document (str "postaus-" post-index))
                                      parsed (marked content)]
                                  #_(println "Parsed: " parsed)
                                  ; TODO Include metadata and title in HTML page
                                  (set! (.. element -innerHTML) parsed))))
       :render
       (fn []
         [:div
          (map-indexed
            (fn [index {:keys [metadata] :as post}]
              ^{:key index}
              [:article
               ; TODO Link to single post
               [:h1 (:title metadata)]
               [:div (use-style blog-style/blog-post
                                {:id (str "postaus-" index)})]])
            parsed-posts)])})))

(defn content []
  (let [post-files (r/atom nil)
        posts (r/atom [])
        error? false
        handle-error #(reset! error? true)]

    (dom/set-title "Kotona ikimetsässä -retkiblogi")

    (r/create-class
      {:component-did-mount (fn []
                              (get-post-files
                                (fn [files]
                                  (reset! post-files files)
                                  (get-posts files
                                             (fn [file]
                                               (swap! posts conj file))
                                             handle-error))
                                handle-error))
       :render
       (fn []
         (let [all-files-loaded? (= (count @posts) (count @post-files))]
           [:div
            [:header (use-style blog-style/header)
             [:a (use-style blog-style/back-to-pikseli {:href "http://www.pikseli.org"})
              "< Pikseli.org"]
             [:img (use-sub-style layout/site-header :logo-blog
                                  {:alt "Kotona ikimetsässä" :src "images/logo_blog.png"})]]
            (cond
              (empty? @posts) [loader/loader {:text "Odota hetki..."}]
              error? "Virhe"
              all-files-loaded? [post-list @posts])]))})))