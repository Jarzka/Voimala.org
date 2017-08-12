(ns voimala.styles.tabs
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [garden.color :as color]))

(def tab-bar
  {:margin-top 0
   :margin-bottom "20px"
   :list-style-type "none"
   :padding-left "0"
   :margin-left "0"
   :border-bottom"1px solid #204d66"})