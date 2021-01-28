(ns pikseli.blog.subscriptions.blog
  (:require
    [re-frame.core :refer [reg-sub]]
    [pikseli.common.re-frame :refer [listen]]))

; Helper functions

(defn posts-loaded? [given-post-ids]
  (let [posts (listen [::posts])
        post-ids (listen [::post-ids])]
    (and
      (some? post-ids)
      (every? (fn [post-id]
                (some? (get posts post-id)))
              given-post-ids))))

(defn- post-index [post-ids post-id]
  (.indexOf post-ids post-id))

; Subscriptions

(reg-sub
  ::current-page-index
  (fn [db]
    (:current-page-index db)))

(reg-sub
  ::post-ids
  (fn [db]
    (:post-ids db)))

(reg-sub
  ::post-ids-from-newest-to-oldest
  :<- [::post-ids]
  (fn [post-ids]
    (-> post-ids sort reverse vec)))

(reg-sub
  ::post-index
  :<- [::post-ids-from-newest-to-oldest]
  (fn [post-ids [_ post-id]]
    (post-index post-ids post-id)))

(reg-sub
  ::older-post-id
  :<- [::post-ids-from-newest-to-oldest]
  (fn [post-ids [_ post-id]]
    (let [post-index (post-index post-ids post-id)
          older-index (inc post-index)]
      (get post-ids older-index))))

(reg-sub
  ::newer-post-id
  :<- [::post-ids-from-newest-to-oldest]
  (fn [post-ids [_ post-id]]
    (let [post-index (post-index post-ids post-id)
          older-index (dec post-index)]
      (get post-ids older-index))))

(reg-sub
  ::posts
  (fn [db]
    (:posts db)))

(reg-sub
  ::post-by-id
  :<- [::posts]
  (fn [posts [_ post-id]]
    (get posts post-id)))

(reg-sub
  ::posts-loading
  (fn [db]
    (:posts-loading db)))

(reg-sub
  ::post-loading?
  :<- [::posts-loading]
  (fn [posts-loading [_ post-id]]
    (posts-loading post-id)))

(reg-sub
  ::error?
  (fn [db]
    (:error? db)))
