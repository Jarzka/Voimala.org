(ns pikseli.services.blog
  (:require [reagent.core :as r]))

(def current-page-index (r/atom 0))

(def post-ids (r/atom nil))

(def posts (r/atom {}))
(def posts-loading (r/atom #{}))

(def error? (r/atom false))

(defn posts-loaded? [given-post-ids]
  (and
    (some? @post-ids)
    (every? (fn [post-id]
              (some? (get @posts post-id)))
            given-post-ids)))