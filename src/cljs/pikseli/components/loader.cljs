(ns pikseli.components.loader
  (:require
    [pikseli.styles.global :as g-styles]
    [pikseli.styles.components.loader :as loader-style]
    [stylefy.core :refer [use-style sub-style use-sub-style]]))

(defn loader [{:keys [text]}]
  [:div
   [:img (use-style loader-style/loader
                   {:src "images/loading.gif"})]
   (when text
     [:div (use-style loader-style/loader-text)
      text])])