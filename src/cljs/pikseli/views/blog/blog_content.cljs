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
            [pikseli.utils :refer [scroll-to-top]]
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

(defn- full-blog-post
  "A single blog post that, given a post id, shows it - or if not loaded, loads it from the server.
   Can be viewed either in full or excerpt mode.

   view-mode  :full / :excerpt"
  [_post-id _options]
  (let [post-html (r/atom nil)
        set-contents! (fn [post]
                        (let [metadata (:metadata post)]
                          ; Update title & page metadata if full post is shown
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

                          (reset! post-html (:html post))))
        update-contents! (fn [post-id]
                           (let [post (get @blog-service/posts post-id)]
                             (if post
                               (set-contents! post)
                               (do
                                 (post-api/get-post post-id
                                                   (fn [post-id contents]
                                                     (swap! blog-service/posts assoc post-id contents)
                                                     (set-contents! contents))
                                                   (fn [] (reset! blog-service/error? true)))))))]
    (r/create-class
      {:component-did-update (fn [this]
                               (let [[post-id] (rest (r/argv this))]
                                 (update-contents! post-id)))
       :component-did-mount (fn [this]
                              (let [[post-id] (rest (r/argv this))]
                                (update-contents! post-id)))
       :reagent-render (fn [post-id]
                         (let [post (get @blog-service/posts post-id)
                               previous-post-id (blog-service/previous-post-id post-id)
                               next-post-id (blog-service/next-post-id post-id)
                               metadata (:metadata post)]
                           [:article
                            (when post [blog-post-title post-id (:title metadata) false])
                            (when post [blog-post-author-and-date metadata])

                            (when-not post [blog-loader])
                            (when @blog-service/error? "Virhe")

                            (when @post-html
                              [:div (use-style blog-style/blog-post-full
                                              {:dangerouslySetInnerHTML {:__html @post-html}})])

                            (when post
                              [:div (use-style blog-style/footer-frontpage)
                               (when previous-post-id
                                 [app-link {:style blog-style/footer-link
                                            :uri (str blog-uri "/" previous-post-id)}
                                  "« Edellinen tarina"])
                               [app-link {:style blog-style/footer-link
                                          :uri blog-uri}
                                "Etusivu"]
                               (when next-post-id
                                 [app-link {:style blog-style/footer-link
                                            :uri (str blog-uri "/" next-post-id)}
                                  "Seuraava tarina »"])])]))})))

(defn- blog-post-excerpt
  "Renders blog post excerpt. Assumes that the post is already loaded."
  [post-id]
  (let [post (get @blog-service/posts post-id)
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

(defn- blog-post-list
  "List of blog posts. Always loads posts on current page before renders all of them at once."
  []
  (let [resolve-max-page-index (fn []
                                 (let [post-ids (blog-service/post-ids-in-order)
                                       post-ids-partitioned (vec (partition-all posts-per-page post-ids))
                                       max-page-index (dec (count post-ids-partitioned))]
                                   max-page-index))
        resolve-post-ids-on-current-page (fn []
                                           (let [post-ids (blog-service/post-ids-in-order)
                                                 post-ids-partitioned (vec (partition-all posts-per-page post-ids))
                                                 post-ids-on-current-page (vec (get post-ids-partitioned @blog-service/current-page-index))]
                                             post-ids-on-current-page))
        load-posts-if-needed! (fn []
                                (let [post-ids (resolve-post-ids-on-current-page)]
                                  (doseq [post-id post-ids]
                                    (when (and
                                            (not (get @blog-service/posts post-id))
                                            (not (@blog-service/posts-loading post-id)))
                                      (post-api/get-post post-id
                                                         (fn [post-id contents]
                                                           (swap! blog-service/posts-loading disj post-id)
                                                           (swap! blog-service/posts assoc post-id contents))
                                                         (fn []
                                                           (swap! blog-service/posts-loading disj post-id)
                                                           (reset! blog-service/error? true)))
                                      (swap! blog-service/posts-loading conj post-id)))))]
    (r/create-class
      {:component-did-mount (fn []
                              (dom-service/set-title (page-settings/page-title "/blog"))
                              (dom-service/clear-meta-tags)
                              (load-posts-if-needed!))
       :component-did-update (fn [] (load-posts-if-needed!))
       :reagent-render (fn []
                         (let [error? @blog-service/error?
                               post-ids @blog-service/post-ids
                               post-ids-on-current-page (resolve-post-ids-on-current-page)
                               max-page-index (resolve-max-page-index)
                               last-index-selected? (= @blog-service/current-page-index max-page-index)
                               loaded? (and (not (empty? post-ids))
                                            (blog-service/posts-loaded? post-ids-on-current-page))
                               pagination (fn []
                                            [pagination/pagination {:indexes (range 0 (inc max-page-index))
                                                                    :active-index @blog-service/current-page-index
                                                                    :on-index-selected (fn [index]
                                                                                         (scroll-to-top)
                                                                                         (reset! blog-service/current-page-index index))}])]
                           [:div
                            (when error? "Virhe")
                            (if loaded?
                              [:div
                               [pagination]
                               [:div
                                (map
                                  (fn [post-id]
                                    ^{:key post-id}
                                    [blog-post-excerpt post-id])
                                  post-ids-on-current-page)

                                (when last-index-selected?
                                  [:p [:em (use-style {:text-align :center}) "(Tätä vanhemmat retkitarinat lisätään blogiin myöhemmin...)"]])
                                [pagination]]]
                              [blog-loader])]))})))

(defn main []
  (r/create-class
    {:component-did-mount (fn []
                            (post-api/get-post-ids
                              (fn [ids] (reset! blog-service/post-ids ids))
                              (fn [] (reset! blog-service/error? true))))
     :reagent-render (fn []
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
                            [full-blog-post blog-post-id {:view-mode :full}]
                            [blog-post-list])]))}))