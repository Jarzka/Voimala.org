(ns pikseli.views.blog.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.app-link :refer [app-link]]
            [pikseli.api.post-api :as post-api]
            [pikseli.components.pagination :as pagination]
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
(def posts-per-page 15)

(defn- blog-loader []
  [ui/loader-light {:text "Odota hetki..."}])

(def blog-uri "/blog")
(defn blog-post-uri [post-id] (str "/blog/" post-id))

(defn- blog-post-title [post-id title clickable?]
  (if clickable?
    [app-link {:uri (blog-post-uri post-id)}
     [:h1 (use-style g-styles/link)
      title]]
    [:h1 title]))

(defn- blog-post-author-and-date [metadata]
  [:span (use-style blog-style/author-and-date)
   (str
     (when (:author metadata)
       (:author metadata))
     " - "
     (when (:date metadata)
       (format/unparse blog-date-out-formatter (tc/from-date (:date metadata)))))])

(defn- single-full-blog-post
  [post-id post-html]
  (let [post (get @blog-service/loaded-posts post-id)
        metadata (:metadata post)]
    [:article
     (when post [blog-post-title post-id (:title metadata) false])
     (when post [blog-post-author-and-date metadata])
     (when-not post [blog-loader])
     [:div (use-style blog-style/blog-post-full
                      {:dangerouslySetInnerHTML {:__html post-html}})]
     [:div (use-style blog-style/footer-frontpage)
      [app-link {:uri blog-uri}
       "Etusivu"]]]))

(defn- blog-post-excerpt
  [post-id]
  (let [post (get @blog-service/loaded-posts post-id)
        metadata (:metadata post)]
    [:article
     (when post [blog-post-title post-id (:title metadata) true])
     (when post [blog-post-author-and-date metadata])
     (when-not post [blog-loader])
     [:div (use-style blog-style/blog-post-excerpt)
      [:img {:src (:image metadata) :alt (:title metadata)}]
      [:p (:excerpt metadata)
       " "
       [app-link {:uri (blog-post-uri post-id)}
        "Lue tarina »"]]]]))

(defn- single-blog-post
  "view-mode  :full / :excerpt"
  [post-id {:keys [view-mode] :or {view-mode true}}]
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
         [:article
          (case view-mode
            :full [single-full-blog-post post-id @post-html]
            :excerpt [blog-post-excerpt post-id])])})))

(defn- post-list [posts]
  (println "post-list")
  (r/with-let
    [current-page-index (r/atom 0)]
    (let [post-ids (-> posts keys sort reverse vec)
          post-ids-on-pages (vec (partition-all posts-per-page post-ids))
          max-page-index (dec (count post-ids-on-pages))
          post-ids-currently-shown (vec (get post-ids-on-pages @current-page-index))
          last-index-selected? (= @current-page-index max-page-index)
          pagination (fn []
                       [pagination/pagination {:indexes (range 0 (inc max-page-index))
                                               :active-index @current-page-index
                                               :on-index-selected (fn [index] (reset! current-page-index index))}])]
      [:div
       [pagination]
       [:div

        (map-indexed
          (fn [index post-id]
            ^{:key post-id}
            [single-blog-post post-id {:view-mode :excerpt}])
          post-ids-currently-shown)

        (when last-index-selected?
          [:p [:em (use-style {:text-align :center}) "(Tätä vanhemmat retkitarinat lisätään blogiin myöhemmin...)"]])
        [pagination]]])))

(defn- blog-home []
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
         (let [all-files-loaded? (and
                                   (not (zero? (count (keys @blog-service/loaded-posts))))
                                   (= (count (keys @blog-service/loaded-posts)) (count @post-file-names)))]
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
                   :uri blog-uri}
         "< Etusivu"]
        [:a (use-style blog-style/back {:href "https://pikseli.org"})
         "< Pikseli.org"])
      [:div (use-sub-style layout/site-header :logo-and-description)
       [:div [app-link {:uri "/blog"}
              [:img (use-sub-style layout/site-header :logo-blog
                                   {:alt "Kotona ikimetsässä" :src page-settings/blog-logo-url})]]]]]
     (if blog-post-id
       [single-blog-post blog-post-id {:view-mode :full}]
       [blog-home])]))