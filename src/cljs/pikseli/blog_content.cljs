(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [clojure.string :as string]
            [pikseli.styles.layout :as layout]))

(defn get-posts [files ok error]
  (doseq [file files]
    (println "GET " (str "blog/" file))
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
  [:div
   (map-indexed
     (fn [index post]
       ^{:key index}
       [:article
        [:h2 "Postaus"]
        (str post)])
     posts)])

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
         (println "FILES: " @post-files)
         (println "POSTS: " @posts)
         (let [all-files-loaded? (= (count @posts) (count @post-files))]
           [:div
            [:img (merge (use-sub-style layout/site-header :logo)
                         {:alt "Kotona ikimetsässä" :src "images/logo.png"})]
            (cond
              (nil? @posts) [loader/loader]
              error? "Virhe"
              all-files-loaded? [post-list @posts])]))})))