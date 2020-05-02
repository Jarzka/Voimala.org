(ns pikseli.styles.components.loader
  (:require [pikseli.styles.global :as g-styles]))

(def loader
  {:width "32px"
   :display :block
   :margin-top "1rem"
   :margin-bottom "1rem"
   :margin-left :auto
   :margin-right :auto})

(def loader-text
  (merge
    g-styles/text-center
    g-styles/text-smaller))