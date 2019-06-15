(ns pikseli.ui.modal
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [reagent.core :as r]))

(def jquery (js* "$"))

(def modal-contents (r/atom nil))

(defn modal-lg []
  [:div.modal.fade
   [:div.modal-dialog.modal-lg.modal-dialog-centered
    (use-style {:max-width "95% !important"})
    [:div.modal-content
     (use-style {:background-color "black"
                 :box-shadow "0px 0px 25px 3px rgba(0,0,0,0.75)"})
     (when @modal-contents
       [@modal-contents])]]])

(defn show-contents! [contents]
  (reset! modal-contents contents)
  (js-invoke (jquery ".modal") "modal" "show"))

(defn hide! []
  (reset! modal-contents nil))