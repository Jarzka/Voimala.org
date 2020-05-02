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

(defn blog-loader []
  [loader/loader {:text "Odota hetki..."}])

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

(defn single-full-blog-post [post-id]
  (let [post-element-id (str "blog-post-" post-id)
        set-contents! (fn [post]
                        (let [parsed-post (js->clj (metadata-parser post) :keywordize-keys true)
                              element (.getElementById js/document post-element-id)
                              parsed (marked (:content parsed-post))]
                          ; TODO Include metadata and title in HTML page
                          (set! (.. element -innerHTML) parsed)))]
    (r/create-class
      {:component-did-mount
       (fn []
         (let [post (get @loaded-posts post-id)]
           (if post
             (set-contents! post)
             (get-post post-id
                       (fn [file-name contents]
                         (swap! loaded-posts assoc file-name contents)
                         (set-contents! contents))
                       nil ; TODO handle error
                       ))))
       :render
       (fn []
         (let [post (get @loaded-posts post-id)
               metadata (when post
                          (:metadata (js->clj (metadata-parser post) :keywordize-keys true)))]
           [:article
            (when post [:h1 (:title metadata)]) ; TODO Link to single post
            (when-not post [blog-loader])
            ; Template needs to be rendered so that it is ready when to contents is set!
            [:div (use-style blog-style/blog-post {:id post-element-id})]]))})))

(defn post-list [posts]
  (let [post-ids (keys posts)]
    [:div
     (map-indexed
       (fn [index post-id]
         ^{:key index}
         [single-full-blog-post post-id])
       post-ids)]))

(defn blog-home []
  (let [post-file-names (r/atom nil)
        error? false
        handle-error #(reset! error? true)]

    (dom/set-title "Kotona ikimetsässä -retkiblogi")

    (r/create-class
      {:component-did-mount
       (fn []
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
         (let [all-files-loaded? (= (count (keys @loaded-posts)) (count @post-file-names))]
           [:div
            (cond
              error? "Virhe"
              all-files-loaded? [post-list @loaded-posts]
              :default [blog-loader])]))})))

(defn content []
  (let [blog-post-id (router/blog-post-id)]
    [:div
     [:header (use-style blog-style/header)
      [:a (use-style blog-style/back-to-pikseli {:href "http://www.pikseli.org"})
       "< Pikseli.org"]
      [:img (use-sub-style layout/site-header :logo-blog
                           {:alt "Kotona ikimetsässä" :src "images/logo_blog.png"})]]
     (if blog-post-id
       [single-full-blog-post blog-post-id]
       [blog-home])]))