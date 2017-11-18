(ns voimala.styles.tabs
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [garden.color :as color]
            [voimala.styles.global :as g-styles]))

(def tab-link-background-color "#1b465d")
(def tab-link {:display "inline-block"
               :height "30px"
               :background-color tab-link-background-color
               :border "1px solid #31769d"
               :border-top-left-radius "5px"
               :border-top-right-radius "5px"
               :padding "7px"
               :margin-right "3px"
               :text-decoration "none"
               :font-size "16px"
               :line-height "2em"
               ::stylefy/mode {:hover {:background-color
                                       (-> tab-link-background-color
                                           (color/lighten 10)
                                           (color/as-hex))}}})

(def tab-bar
  {:margin-top 0
   :margin-bottom "20px"
   :list-style-type "none"
   :padding-left "0"
   :margin-left "0"
   :border-bottom "1px solid #204d66"
   ::stylefy/sub-styles
   {:li (merge
          g-styles/clickable
          {:display "inline-block"})
    :link tab-link
    :link-active (merge
                   tab-link
                   {:border "1px solid #43a1d6"
                    :border-bottom "1px solid #276586"
                    :background-color (-> tab-link-background-color
                                          (color/lighten 25)
                                          (color/as-hex))
                    :color "white"})}})