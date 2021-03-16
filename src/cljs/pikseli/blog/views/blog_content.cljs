(ns pikseli.blog.views.blog-content
  (:require [stylefy.core :refer [use-style use-sub-style]]
            [pikseli.common.components.app-link :refer [app-link]]
            [pikseli.blog.api.post-api :as post-api]
            [pikseli.common.components.pagination :as pagination]
            [pikseli.blog.services.blog :as blog-service]
            [pikseli.common.services.dom :as dom-service]
            [pikseli.blog.views.about :as blog-about]
            [pikseli.blog.styles.blog :as blog-style]
            [pikseli.blog.subscriptions.blog :as blog-subscription]
            [pikseli.common.page-settings :as page-settings]
            [pikseli.common.utils :refer [scroll-to-top]]
            [pikseli.common.re-frame :refer [listen]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [cljs-time.format :as format]
            [cljs-time.coerce :as tc]
            [pikseli.common.styles.layout :as layout]
            [pikseli.common.router :as router]
            [pikseli.common.services.router :as router-service]
            [pikseli.common.styles.global :as g-styles]
            [pikseli.common.ui.general :as ui]))

(def blog-date-out-formatter (format/formatter "d.M.yyyy"))
(def posts-per-page 15)

(defn error-text []
  [:p (use-style g-styles/error-text) "Virhe. Yritä ladata sivu uudelleen."])

(defn- blog-loader []
  [ui/loader-light])

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

(defn discussion [post-id]
  (r/create-class
    {:component-did-mount (fn []
                            (set! (.-HYVOR_TALK_WEBSITE js/window) 1298)

                            (let [config #js {:url "https://metsassa.pikseli.org" :id post-id}]
                              (let [hyvor-running? (.getElementById js/document "hyvor")]
                                (if hyvor-running?
                                  (.reload (.-hyvor_talk js/window) config)
                                  (do
                                    (set! (.-HYVOR_TALK_CONFIG js/window) config)
                                    (let [hyvor-script (.createElement js/document "script")]
                                      (set! (.-async hyvor-script) "async")
                                      (set! (.-id hyvor-script) "hyvor")
                                      (set! (.-type hyvor-script) "text/javascript")
                                      (set! (.-src hyvor-script) "https://talk.hyvor.com/web-api/embed")
                                      (.appendChild (.-body js/document) hyvor-script)))))))
     :reagent-render      (fn []
                            [:div#hyvor-talk-view (use-style {:width      "100%"
                                                              :margin-top "1rem"})])}))

(defn- full-blog-post
  "A single blog post that, given a post id, shows it - or if not loaded, loads it from the server."
  [_post-id]
  (let [post-html (r/atom nil)
        reset-html! #(reset! post-html nil)
        post-fully-loaded? (fn [post] (boolean (and post (:html post))))
        set-contents! (fn [post]
                        (let [metadata (:metadata post)]
                          (dom-service/set-title
                            (page-settings/blog-post-title
                              (:title metadata)))
                          (dom-service/set-meta-tags
                            {:title    (:title metadata)
                             :type     "article"
                             :image    (:image metadata)
                             :uri      (str (router-service/read-host)
                                            (router-service/read-uri))
                             :author   (:author metadata)
                             :keywords (:keywords metadata)})
                          (reset! post-html (:html post))))
        update-contents! (fn [post-id]
                           (let [post (listen [::blog-subscription/post-by-id post-id])]
                             (if (post-fully-loaded? post)
                               (set-contents! post)
                               (do
                                 (dispatch [::post-api/get-post
                                            post-id
                                            (fn [post-id contents]
                                              (dispatch [::blog-service/set-post-contents post-id contents])
                                              (set-contents! contents))
                                            (fn []
                                              (dispatch [::blog-service/set-error]))])))))]
    (r/create-class
      {:component-did-update (fn [this]
                               (let [[post-id] (rest (r/argv this))]
                                 (update-contents! post-id)))
       :component-did-mount  (fn [this]
                               (let [[post-id] (rest (r/argv this))]
                                 (update-contents! post-id)))
       :reagent-render       (fn [post-id]
                               (let [post (listen [::blog-subscription/post-by-id post-id])
                                     post-loaded? (post-fully-loaded? post)
                                     newer-post-id (listen [::blog-subscription/newer-post-id post-id])
                                     older-post-id (listen [::blog-subscription/older-post-id post-id])
                                     metadata (:metadata post)
                                     error? (listen [::blog-subscription/error?])]
                                 [:<>
                                  [:article
                                   (when post-loaded? [blog-post-title post-id (:title metadata) false])
                                   (when post-loaded? [blog-post-author-and-date metadata])

                                   (when-not post-loaded? [blog-loader])
                                   (when error? [error-text])

                                   (when @post-html
                                     [:div (use-style blog-style/blog-post-full
                                                      {:dangerouslySetInnerHTML {:__html @post-html}})])

                                   (when post-loaded?
                                     [:footer (use-style blog-style/blog-post-footer)

                                      (when older-post-id
                                        [app-link {:style    blog-style/footer-link
                                                   :uri      (str blog-uri "/" older-post-id)
                                                   :on-click reset-html!}
                                         "« Edellinen tarina"])
                                      [app-link {:style blog-style/footer-link
                                                 :uri   blog-uri}
                                       "Etusivu"]
                                      (when newer-post-id
                                        [app-link {:style    blog-style/footer-link
                                                   :uri      (str blog-uri "/" newer-post-id)
                                                   :on-click reset-html!}
                                         "Seuraava tarina »"])

                                      [discussion post-id]])]]))})))

(defn- blog-post-excerpt
  "Renders blog post excerpt. Assumes that the post is already loaded."
  [post-id]
  (let [post (listen [::blog-subscription/post-by-id post-id])
        metadata (:metadata post)]
    [:article
     (when post [blog-post-title post-id (:title metadata) true])
     (when post [blog-post-author-and-date metadata])
     (when-not post [blog-loader])
     [:div (use-style blog-style/blog-post-excerpt)
      [app-link {:uri (blog-post-uri post-id)}
       [:img {:src (:image metadata) :alt (:title metadata)}]]
      [:p (:excerpt metadata)
       " "
       [app-link {:uri (blog-post-uri post-id)}
        "Lue tarina »"]]]]))

(defn- blog-post-list
  "List of blog posts. Always loads posts on current page before renders all of them at once."
  []
  (let [max-page-index (fn []
                         (let [post-ids (listen [::blog-subscription/post-ids-from-newest-to-oldest])
                               post-ids-partitioned (vec (partition-all posts-per-page post-ids))
                               max-page-index (dec (count post-ids-partitioned))]
                           max-page-index))
        post-ids-on-current-page (fn []
                                   (let [post-ids (listen [::blog-subscription/post-ids-from-newest-to-oldest])
                                         current-page-index (listen [::blog-subscription/current-page-index])
                                         post-ids-partitioned (vec (partition-all posts-per-page post-ids))
                                         post-ids-on-current-page (vec (get post-ids-partitioned current-page-index))]
                                     post-ids-on-current-page))
        load-posts-if-needed! (fn []
                                (let [post-ids (post-ids-on-current-page)]
                                  (doseq [post-id post-ids]
                                    (when (and
                                            (not (listen [::blog-subscription/post-by-id post-id]))
                                            (not (listen [::blog-subscription/post-loading? post-id])))
                                      (dispatch [::post-api/get-post-metadata post-id
                                                 (fn [post-id metadata]
                                                   (dispatch [::blog-service/set-post-loaded post-id])
                                                   (dispatch [::blog-service/set-post-metadata post-id metadata]))
                                                 (fn []
                                                   (dispatch [::blog-service/set-post-loaded post-id])
                                                   (dispatch [::blog-service/set-error]))])
                                      (dispatch [::blog-service/set-post-loading post-id])))))]
    (r/create-class
      {:component-did-mount  (fn []
                               (dom-service/set-title (page-settings/page-title "/blog"))
                               (dom-service/clear-meta-tags)
                               (load-posts-if-needed!))
       :component-did-update (fn [] (load-posts-if-needed!))
       :reagent-render       (fn []
                               (let [error? (listen [::blog-subscription/error?])
                                     post-ids (listen [::blog-subscription/post-ids])
                                     post-ids-on-current-page (post-ids-on-current-page)
                                     max-page-index (max-page-index)
                                     loaded? (and (seq post-ids)
                                                  (blog-subscription/posts-loaded? post-ids-on-current-page))
                                     pagination (fn []
                                                  [pagination/pagination {:indexes           (range 0 (inc max-page-index))
                                                                          :active-index      (listen [::blog-subscription/current-page-index])
                                                                          :on-index-selected (fn [index]
                                                                                               (scroll-to-top)
                                                                                               (dispatch [::blog-service/set-current-page-index index]))}])]
                                 [:<>
                                  (when error? [error-text])
                                  (if loaded?
                                    [:<>
                                     [pagination]
                                     [:<>
                                      (map
                                        (fn [post-id]
                                          ^{:key post-id}
                                          [blog-post-excerpt post-id])
                                        post-ids-on-current-page)
                                      [pagination]]]
                                    [blog-loader])]))})))

(defn main []
  (r/create-class
    {:component-did-mount (fn []
                            (dispatch [::post-api/get-post-ids
                                       (fn [ids] (dispatch [::blog-service/set-post-ids ids]))
                                       (fn [] (dispatch [::blog-service/set-error]))]))
     :reagent-render      (fn []
                            (let [blog-post-id (router/blog-post-id @router-service/uri)
                                  about? (router/uri-is-blog-about? @router-service/uri)]
                              [:div (use-style blog-style/blog-content)
                               [:header (use-style blog-style/header)

                                [:div (use-style blog-style/top-links)
                                 (if (or blog-post-id about?)
                                   [app-link {:style blog-style/back
                                              :uri   blog-uri}
                                    "< Etusivu"])
                                 [app-link {:style blog-style/about
                                            :uri   "/blog/about"}
                                  "Kirjoittajasta"]]

                                [:div (use-sub-style layout/site-header :logo-and-description)
                                 [:div [app-link {:uri "/blog"}
                                        [:img (use-sub-style layout/site-header :logo-blog
                                                             {:alt "Kotona ikimetsässä" :src page-settings/blog-logo-url})]]]]]
                               (cond
                                 about? [blog-about/about]
                                 blog-post-id [full-blog-post blog-post-id {:view-mode :full}]
                                 :else [blog-post-list])]))}))