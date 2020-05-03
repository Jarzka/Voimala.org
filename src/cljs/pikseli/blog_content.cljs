(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require ["marked" :as marked]
            ["markdown-yaml-metadata-parser" :as metadata-parser]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [pikseli.services.blog :as blog-service]
            [pikseli.styles.views.blog :as blog-style]
            [pikseli.page-settings :as page-settings]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [clojure.string :as string]
            [cljs-time.format :as format]
            [cljs-time.coerce :as tc]
            [pikseli.styles.layout :as layout]
            [pikseli.router :as router]
            [pikseli.services.router :as router-service]
            [pikseli.styles.global :as g-styles]))

(def blog-date-out-formatter (format/formatter "d.M.yyyy"))

(defn blog-loader []
  [loader/loader {:text "Odota hetki..."}])

(defn single-full-blog-post [post-id]
  (let [post-html (r/atom nil)
        set-contents! (fn [post]
                        (let [parsed-post (js->clj (metadata-parser post) :keywordize-keys true)
                              parsed (marked (:content parsed-post))]
                          ; TODO Include metadata and title in HTML page
                          (reset! post-html parsed)))]
    (r/create-class
      {:component-did-mount
       (fn []
         (let [post (get @blog-service/loaded-posts post-id)]
           (if post
             (set-contents! post)
             (blog-service/get-post post-id
                                    (fn [file-name contents]
                                      (swap! blog-service/loaded-posts assoc file-name contents)
                                      (set-contents! contents))
                                    nil ; TODO handle error
                                    ))))
       :render
       (fn []
         (let [post (get @blog-service/loaded-posts post-id)
               metadata (when post
                          (:metadata (js->clj (metadata-parser post) :keywordize-keys true)))]
           [:article
            (when post [:a {:href (str "/blog/" post-id)}
                        [:h1 (use-style g-styles/link)
                         (:title metadata)]])
            (when post [:span (use-style blog-style/author-and-date)
                        (str (:author metadata) " - " (format/unparse blog-date-out-formatter (tc/from-date (:date metadata))))])
            (when-not post [blog-loader])
            ; Template needs to be rendered so that it is ready when to contents is set!
            [:div (use-style
                    blog-style/blog-post
                    {:dangerouslySetInnerHTML {:__html @post-html}})]]))})))

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

    (r/create-class
      {:component-did-mount
       (fn []
         (blog-service/get-post-files
           (fn [file-names]
             (reset! post-file-names file-names)
             (blog-service/get-posts file-names
                        (fn [file-name contents]
                          (swap! blog-service/loaded-posts assoc file-name contents))
                        handle-error))
           handle-error))
       :render
       (fn []
         (let [all-files-loaded? (= (count (keys @blog-service/loaded-posts)) (count @post-file-names))]
           [:div
            (cond
              error? "Virhe"
              all-files-loaded? [post-list @blog-service/loaded-posts]
              :default [blog-loader])]))})))

(defn content []
  (let [blog-post-id (router/blog-post-id (router-service/read-uri))]
    [:div
     [:header (use-style blog-style/header)
      (if blog-post-id
        [:a (use-style blog-style/back-to-pikseli {:href "/blog/"})
         "< Blogin etusivu"]
        [:a (use-style blog-style/back-to-pikseli {:href "http://www.pikseli.org"})
        "< Pikseli.org"])
      [:img (use-sub-style layout/site-header :logo-blog
                           {:alt "Kotona ikimetsässä" :src "/images/logo_blog.png"})]]
     (if blog-post-id
       [single-full-blog-post blog-post-id]
       [blog-home])]))