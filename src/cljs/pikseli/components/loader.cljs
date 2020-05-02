(ns pikseli.components.loader
  (:require
    [pikseli.styles.components.loader :as loader-style]
    [stylefy.core :refer [use-style sub-style use-sub-style]]))

(defn loader []
  [:img (use-style loader-style/loader
                   {:src "images/loading.gif"})])