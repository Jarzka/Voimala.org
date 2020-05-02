(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            ["marked" :as marked]
            ["markdown-yaml-metadata-parser" :as metadata-parser]
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
                                      element (.getElementById js/document (str "postaus-" post-index))]
                                  ; TODO Include metadata and title in HTML page
                                  (set! (.. element -innerHTML) (marked content)))))
       :render
       (fn []
         [:div
          (map-indexed
            (fn [index {:keys [metadata] :as post}]
              ^{:key index}
              [:article
               ; TODO Link to single post
               [:h1 (:title metadata)]
               [:div {:id (str "postaus-" index)}]])
            parsed-posts)])})))

(defn content []
  (let [post-files (r/atom nil)
        posts (r/atom [])
        error? false
        handle-error #(reset! error? true)]

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
            [:a {:href "http://www.pikseli.org"}
             [:img (use-sub-style layout/site-header :logo-blog
                                  {:alt "Kotona ikimetsässä" :src "images/logo_blog.png"})]]
            (cond
              (empty? @posts) [loader/loader {:text "Odota hetki..."}]
              error? "Virhe"
              all-files-loaded? [post-list @posts])]))})))