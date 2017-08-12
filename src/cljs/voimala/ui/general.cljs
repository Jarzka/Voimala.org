(ns voimala.ui.general
  (:require [stylefy.core :as stylefy]
            [voimala.styles.global :as g-styles]))

(defn p [& content]
  [:p (stylefy/use-style g-styles/p)
   content])

(defn h1 [& content]
  [:h1 (stylefy/use-style g-styles/h1)
   content])

(defn headline[& content]
  [:h1 (stylefy/use-style g-styles/headline)
   content])