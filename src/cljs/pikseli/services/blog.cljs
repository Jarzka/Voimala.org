(ns pikseli.services.blog
  (:require [reagent.core :as r]))

; State

(def current-page-index (r/atom 0))

(def post-ids (r/atom nil))

(def posts (r/atom {}))
(def posts-loading (r/atom #{}))

(def error? (r/atom false))

; Helpers

(defn post-ids-from-oldest-to-newest []
  (-> @post-ids sort reverse vec))

(defn post-index [post-id]
  (let [posts (post-ids-from-oldest-to-newest)]
    (.indexOf posts post-id)))

(defn newer-post-id [post-id]
  (let [posts (post-ids-from-oldest-to-newest)
        post-index (post-index post-id)
        newer-index (inc post-index)]
    (get posts newer-index)))

(defn older-post-id [post-id]
  (let [posts (post-ids-from-oldest-to-newest)
        post-index (post-index post-id)
        older-index (dec post-index)]
    (get posts older-index)))

(defn posts-loaded? [given-post-ids]
  (and
    (some? @post-ids)
    (every? (fn [post-id]
              (some? (get @posts post-id)))
            given-post-ids)))