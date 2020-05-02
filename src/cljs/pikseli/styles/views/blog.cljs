(ns pikseli.styles.views.blog
  (:require [stylefy.core :as stylefy]
            [garden.color :as color]
            [garden.stylesheet :refer [at-media]]
            [pikseli.styles.global :as g-styles]))

(def blog-post {:font-family "Georgia, Garamond"
                ::stylefy/manual [[:img
                                   {:display :block
                                    :margin-left :auto
                                    :margin-right :auto
                                    :width "80%"}]
                                  (at-media {:max-width g-styles/phone-width}
                                            [:img {:width "100%"}])]})