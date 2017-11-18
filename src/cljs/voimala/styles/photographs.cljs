(ns voimala.styles.photographs
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [garden.color :as color]))

(def photo-group {:display "flex"
                  :flex-wrap :wrap})

(def photo {:box-sizing :border-box
            :padding-right "5px"})

(def photo-1-3 (merge photo {:flex "33%"}))
(def photo-1-2 (merge photo {:flex "50%"}))
(def photo-full (merge photo {:flex "100%"}))

(def photo-img {:width "100%"})