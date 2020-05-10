(ns pikseli.styles.components.pagination
  (:require [stylefy.core :refer [use-style sub-style use-sub-style] :as stylefy]
            [pikseli.styles.global :as g-styles]
            [garden.color :as color]))

(def pagination {:display :flex
                 :justify-content :center
                 ::stylefy/manual [[:.active [:.page-link {:background-color :unset
                                                           :border 0
                                                           :color (:text g-styles/colors)}]]
                                   [:.disabled [:.page-link {:background-color :unset}]]
                                   [:.page-link {:padding "0.3rem"}]
                                   [:.page-link [:&:active {:background-color :unset
                                                            :border 0
                                                            :color (:text g-styles/colors)}]]]})

(def link (merge
            g-styles/link
            {:background-color :unset
             :border 0
             ::stylefy/mode {:hover {:background-color :unset
                                     :color (-> (:link g-styles/colors)
                                                (color/lighten 10)
                                                (color/as-hex))}
                             :focus {:box-shadow :unset}}}))