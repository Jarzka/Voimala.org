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

(def header {:position :relative})

(def back-to-pikseli {:position :absolute
                      :left "0.1rem"
                      :top "0.1rem"})

(def author-and-date {:margin-bottom "1rem"
                      :position :relative
                      :top "-0.5rem"
                      :font-size "0.7rem"
                      :color "#5a5a5a"})