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
            [pikseli.styles.layout :as layout]
            [pikseli.services.router :as router]))

(def loaded-posts (r/atom {}))

(defn get-post [file-name ok error]
  (ajax/GET!
    (str "blog/" file-name ".md")
    {:ok #(ok file-name %)
     :error error}))

(defn get-posts [file-names ok error]
  (doseq [file-name file-names]
    (get-post file-name ok error)))

(defn get-post-files [ok error]
  (ajax/GET!
    "blog/posts.txt"
    {:ok (fn [response]
           (let [lines (string/split-lines response)
                 lines-stored (sort lines)]
             (ok lines-stored)))
     :error error}))

(defn single-blog-post [id]
  #_(r/create-class
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
        [:article
         ; TODO Link to single post
         [:h1 (:title metadata)]
         [:div (use-style blog-style/blog-post
                          {:id (str "postaus-" index)})]]])}))

(defn post-list [posts]
  (let [parsed-posts (mapv #(js->clj (metadata-parser %) :keywordize-keys true) (vals posts))]
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

(defn blog-home []
  (let [post-file-names (r/atom nil)
        error? false
        handle-error #(reset! error? true)]

    (dom/set-title "Kotona ikimetsässä -retkiblogi")

    (r/create-class
      {:component-did-mount (fn []
                              (get-post-files
                                (fn [file-names]
                                  (reset! post-file-names file-names)
                                  (get-posts file-names
                                             (fn [file-name contents]
                                               (swap! loaded-posts assoc file-name contents))
                                             handle-error))
                                handle-error))
       :render
       (fn []
         (println "LADATTU: " @loaded-posts)
         (let [all-files-loaded? (= (count (keys @loaded-posts)) (count @post-file-names))]
           [:div
            [:header (use-style blog-style/header)
             [:a (use-style blog-style/back-to-pikseli {:href "http://www.pikseli.org"})
              "< Pikseli.org"]
             [:img (use-sub-style layout/site-header :logo-blog
                                  {:alt "Kotona ikimetsässä" :src "images/logo_blog.png"})]]
            (cond
              error? "Virhe"
              all-files-loaded? [post-list @loaded-posts]
              :default [loader/loader {:text "Odota hetki..."}])]))})))

(defn content []
  (let [blog-post-id (router/blog-post-id)]
    (if blog-post-id
      [single-blog-post blog-post-id]
      [blog-home])))