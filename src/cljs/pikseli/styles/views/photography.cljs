(ns pikseli.styles.views.photography
  (:require [stylefy.core :as stylefy]
            [garden.color :as color]))

(def photo {:width "100%"
            :margin-bottom "0.5rem"})

(def buffer-photo {:visibility :hidden
                   :display :block
                   :width "0 !important"
                   :height "0 !important"})

(def photo-in-modal {:display :block
                     :margin-left "auto"
                     :margin-right "auto"
                     :max-width "100%"
                     :max-height "90vh"})

(def photo-text {:margin-top "0.5rem"
                 :margin-bottom "0.5rem"
                 :text-align :center
                 :color :grey
                 :font-size "0.85rem"})