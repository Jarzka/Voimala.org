(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.app-link :refer [app-link]]
            [pikseli.api.post-api :as post-api]
            [pikseli.services.blog :as blog-service]
            [pikseli.services.dom :as dom-service]
            [pikseli.styles.views.blog :as blog-style]
            [pikseli.page-settings :as page-settings]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-time.format :as format]
            [cljs-time.coerce :as tc]
            [pikseli.styles.layout :as layout]
            [pikseli.router :as router]
            [pikseli.services.router :as router-service]
            [pikseli.styles.global :as g-styles]
            [pikseli.ui.general :as ui]))

(def blog-date-out-formatter (format/formatter "d.M.yyyy"))

(defn blog-loader []
  [ui/loader-light {:text "Odota hetki..."}])

(defn single-full-blog-post [post-id]
  (let [post-html (r/atom nil)
        set-contents! (fn [post]
                        (let [metadata (:metadata post)]
                          ; Update title & page metadata
                          (when (router/blog-post-id (router-service/read-uri))
                            (dom-service/set-title
                              (page-settings/blog-post-title
                                (:title metadata)))
                            (dom-service/set-meta-tags
                              {:title (:title metadata)
                               :type "article"
                               :image (:image metadata)
                               :uri (str (router-service/read-host)
                                         (router-service/read-uri))
                               :author (:author metadata)
                               :keywords (:keywords metadata)}))

                          (reset! post-html (:html post))))]
    (r/create-class
      {:component-did-mount
       (fn []
         (let [post (get @blog-service/loaded-posts post-id)]
           (if post
             (set-contents! post)
             (post-api/get-post post-id
                                    (fn [file-name contents]
                                      (swap! blog-service/loaded-posts assoc file-name contents)
                                      (set-contents! contents))
                                    nil ; TODO handle error
                                    ))))
       :component-will-unmount
       (fn []
         ; Update title and metadata
         (when-not (router/blog-post-id (router-service/read-uri))
           (dom-service/clear-meta-tags)))
       :render
       (fn []
         (let [post (get @blog-service/loaded-posts post-id)
               metadata (:metadata post)]
           [:article
            (when post
              (if (router/blog-post-id (router-service/read-uri))
                [:h1 (:title metadata)]
                [app-link {:uri (str "/blog/" post-id)}
                 [:h1 (use-style g-styles/link)
                  (:title metadata)]]))

            (when post [:span (use-style blog-style/author-and-date)
                        (str
                          (when (:author metadata)
                            (:author metadata))
                         " - "
                         (when (:date metadata)
                           (format/unparse blog-date-out-formatter (tc/from-date (:date metadata)))))])

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
        handle-error (fn [error]
                       (.error js/console "Error: " error)
                       (reset! error? true))]

    (r/create-class
      {:component-did-mount
       (fn []
         (dom-service/set-title (page-settings/page-title "/blog"))
         (post-api/get-post-ids
           (fn [ids]
             (reset! post-file-names ids)
             (post-api/get-posts ids
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
  (let [blog-post-id (router/blog-post-id @router-service/uri)]
    [:div (use-style blog-style/blog-content)
     [:header (use-style blog-style/header)
      (if blog-post-id
        [app-link {:style blog-style/back
                   :uri "/blog"}
         "< Blogin etusivu"]
        [:a (use-style blog-style/back {:href "https://pikseli.org"})
         "< Pikseli.org"])
      [:div (use-sub-style layout/site-header :logo-and-description)
       [:div [app-link {:uri "/blog"}
        [:img (use-sub-style layout/site-header :logo-blog
                             {:alt "Kotona ikimetsässä" :src page-settings/blog-logo-url})]]]]]
     (if blog-post-id
       [single-full-blog-post blog-post-id]
       [blog-home])]))