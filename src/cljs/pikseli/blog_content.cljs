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

(defn single-full-blog-post [post-id]
  ; Contents must have been loaded at this point
  (when-let [post (get @loaded-posts post-id)]
    (let [{:keys [metadata content]} (js->clj (metadata-parser post) :keywordize-keys true)]
      (r/create-class
        {:component-did-mount (fn []
                                (let [element (.getElementById js/document (str "blog-post-" post-id))
                                      parsed (marked content)]
                                  ; TODO Include metadata and title in HTML page
                                  (set! (.. element -innerHTML) parsed)))
         :render
         (fn []
           [:div
            [:article
             [:h1 (:title metadata)] ; TODO Link to single post
             [:div (use-style blog-style/blog-post
                              {:id (str "blog-post-" post-id)})]]])}))))

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
      [single-full-blog-post blog-post-id] ; TODO Content needs to beloaded
      [blog-home])))