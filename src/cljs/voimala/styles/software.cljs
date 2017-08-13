(ns voimala.styles.software
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [garden.color :as color]))

(def project-content-container-column {:padding "5px"})

(def project-content-container
  {:display "flex"
   ::stylefy/sub-styles {:col1 (merge project-content-container-column
                                      {:width "30%"
                                       :min-width "30%"
                                       :max-width "30%"
                                       ::stylefy/sub-styles {:image {:width "100%"}}})
                         :col2 (merge project-content-container-column
                                      {:width "70%"
                                       :min-width "70%"
                                       :max-width "70%"})}})