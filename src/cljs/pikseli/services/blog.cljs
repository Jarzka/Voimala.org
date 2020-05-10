(ns pikseli.services.blog
  (:require [reagent.core :as r]))

; State

(def current-page-index (r/atom 0))

(def post-ids (r/atom nil))

(def posts (r/atom {}))
(def posts-loading (r/atom #{}))

(def error? (r/atom false))

; Helpers

(defn post-ids-in-order []
  (-> @post-ids sort reverse vec))

(defn post-index [post-id]
  (let [posts (post-ids-in-order)]
    (.indexOf posts post-id)))

(defn next-post-id [post-id]
  (let [posts (post-ids-in-order)
        post-index (post-index post-id)
        next-index (inc post-index)]
    (get posts next-index)))

(defn previous-post-id [post-id]
  (let [posts (post-ids-in-order)
        post-index (post-index post-id)
        previous-index (dec post-index)]
    (get posts previous-index)))

(defn posts-loaded? [given-post-ids]
  (and
    (some? @post-ids)
    (every? (fn [post-id]
              (some? (get @posts post-id)))
            given-post-ids)))