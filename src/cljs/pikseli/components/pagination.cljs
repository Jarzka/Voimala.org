(ns pikseli.components.pagination
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.styles.components.pagination :as pagination-style]))

(defn page-item [{:keys [index disabled? active? clicked text]}]
  [:li.page-item {:class (str
                           (when active? "active ")
                           (when disabled? "disabled "))}
   [:a.page-link (use-style pagination-style/link {:href "#"
                                                   :on-click (fn [event]
                                                               (.preventDefault event)
                                                               (.stopPropagation event)
                                                               (when-not disabled? (clicked index)))})
    text]])

(defn pagination [{:keys [indexes active-index on-index-selected]}]
  (let [max-index (dec (count indexes))]
    [:nav (use-style pagination-style/pagination)
     [:ul.pagination
      [page-item {:index 0
                  :disabled? (= active-index 0)
                  :clicked on-index-selected
                  :text "Edellinen"}]
      (when indexes
        (map-indexed
          (fn [index]
            (let [active? (= active-index index)]
              ^{:key index}
              [page-item {:index index
                          :disabled? active?
                          :clicked on-index-selected
                          :active active?
                          :text (inc index)}]))
          indexes))
      [page-item {:index max-index
                  :disabled? (= active-index max-index)
                  :clicked on-index-selected
                  :text "Seuraava"}]]]))