(ns voimala.ui.general
  (:require [stylefy.core :as stylefy]
            [voimala.styles.global :as g-styles]))

(defn p [& content]
  [:p (stylefy/use-style g-styles/p)
   content])