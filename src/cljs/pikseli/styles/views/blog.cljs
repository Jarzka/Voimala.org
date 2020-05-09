(ns pikseli.styles.views.blog
  (:require [stylefy.core :as stylefy]
            [garden.color :as color]
            [garden.stylesheet :refer [at-media]]
            [pikseli.styles.global :as g-styles]))

(def blog-post {:font-family "Georgia, Garamond"})

(def blog-post-full
  (merge
    blog-post
    {::stylefy/manual [[:img
                        {:display :block
                         :margin-left :auto
                         :margin-right :auto
                         :margin-top "0.5rem"
                         :margin-bottom "0.5rem"
                         :width "80%"}]
                       (at-media {:max-width g-styles/phone-max-width}
                                 [:img {:width "100%"}])]}))

(def blog-post-excerpt
  (merge
    blog-post
    {::stylefy/manual [[:img
                        {:display :block
                         :margin-left :auto
                         :margin-right :auto
                         :margin-top "0.5rem"
                         :margin-bottom "0.5rem"
                         :object-fit :cover
                         :width "100%"
                         :height "23rem"}]]}))

(def header {:position :relative})

(def back (merge
            {:position :absolute
             :left "0.1rem"
             :top "0.1rem"}
            (g-styles/on-mobile
              {:position :static
               :display :block
               :margin-bottom "1rem"})))

(def author-and-date {:margin-bottom "1rem"
                      :position :relative
                      :top "-0.5rem"
                      :font-size "0.7rem"
                      :color "#5a5a5a"})

(def blog-content {:min-height "1500px"})