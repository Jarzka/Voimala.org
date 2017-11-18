(ns voimala.styles.software
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [voimala.styles.layout :as layout]
            [garden.color :as color]))

(def column {:padding "5px"
             ::stylefy/media
             {layout/media-breakpoint-phone
              {:width "auto"
               :min-width "none"
               :max-width "none"}}})

(def project-content-container
  {:display "flex"
   ::stylefy/media {layout/media-breakpoint-phone {:display "block"}}
   ::stylefy/sub-styles
   {:col1 (merge column
                 {:width "30%"
                  :min-width "30%"
                  :max-width "30%"
                  ::stylefy/sub-styles {:image {:width "100%"}}})
    :col2 (merge column
                 {:width "70%"
                  :min-width "70%"
                  :max-width "70%"})}})