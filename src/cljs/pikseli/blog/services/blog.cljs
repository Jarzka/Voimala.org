(ns pikseli.blog.services.blog
  (:require [reagent.core :as r]
            [re-frame.core :refer [reg-event-db]]))

(def state
  {:current-page-index 0
   :post-ids           nil ; A vector of all known post ids
   :posts              {} ; post-id -> post
   :posts-loading      #{} ; A set of post ids being loaded
   :error?             false})

(reg-event-db
  ::init
  (fn [db [_]]
    state))

(reg-event-db
  ::reset-post-ids
  (fn [db [_ post-ids]]
    (assoc db :post-ids post-ids)))

(reg-event-db
  ::set-error
  (fn [db [_]]
    (assoc db :error? true)))

(reg-event-db
  ::set-current-page-index
  (fn [db [_ index]]
    (assoc db :current-page-index index)))

(reg-event-db
  ::set-post-contents
  (fn [db [_ post-id contents]]
    (assoc-in db [:posts post-id] contents)))

(reg-event-db
  ::set-post-metadata
  (fn [db [_ post-id metadata]]
    (assoc-in db [:posts post-id :metadata] metadata)))

(reg-event-db
  ::set-post-loading
  (fn [db [_ post-id]]
    (let [posts-loading (:posts-loading db)]
      (assoc db :posts-loading (conj posts-loading post-id)))))

(reg-event-db
  ::set-post-loaded
  (fn [db [_ post-id]]
    (let [posts-loading (:posts-loading db)]
      (assoc db :posts-loading (disj posts-loading post-id)))))