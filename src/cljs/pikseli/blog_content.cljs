(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            ["marked" :as marked]
            [clojure.string :as string]
            [pikseli.styles.layout :as layout]))

(defn get-posts [files ok error]
  (doseq [file files]
    (ajax/GET!
      (str "blog/" file)
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
  (r/create-class
    {:component-did-mount (fn []
                            (doseq [post-index (range 0 (count posts))]
                              (let [post (get posts post-index)
                                    element (.getElementById js/document (str "postaus-" post-index))]
                                (set! (.. element -innerHTML) (marked post)))))
     :render
     (fn []
       [:div
        (map-indexed
          (fn [index post]
            ^{:key index}
            [:article
             [:h2 "Postaus"]
             [:div {:id (str "postaus-" index)}]])
          posts)])})

  )

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
            [:img (merge (use-sub-style layout/site-header :logo)
                         {:alt "Kotona ikimetsässä" :src "images/logo.png"})]
            (cond
              (empty? @posts) [loader/loader]
              error? "Virhe"
              all-files-loaded? [post-list @posts])]))})))