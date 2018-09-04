(ns voimala.styles.layout
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [garden.color :as color]))

(def media-breakpoint-phone {:max-width "800px"})

(def dark-box {:border-radius "5px"
               :background-color "rgba(0, 0, 0, 0.85)"
               :border "1px solid rgba(255, 255, 255, 0.1)"})

(def site-header
  (merge
    dark-box
    {:display "flex"
     :flex-direction "row"
     :justify-content "center"
     :height "80px"
     :align-items "center"
     :padding-bottom "7px"
     :padding-top "7px"
     ::stylefy/sub-styles
     {:logo-and-description {:text-align "center"}
      :logo {:display :block ;
             :margin-left "auto"
             :margin-right "auto"
             :width "290px"
             :height "55px"
             :max-height "93px"
             :max-width "500px"}
      :site-description {:padding-top "5px"
                         :padding-bottom "5px"}}
      ::stylefy/media {media-breakpoint-phone
                       {:flex-direction :column
                        :height "auto"}}}))

(def page-content (merge dark-box
                         {:margin-left "auto"
                          :margin-right "auto"
                          :margin-top "20px"
                          :max-width "1024px"
                          :box-shadow "0 -1px 5px rgba(0, 0, 0, 0.5) inset"
                          :padding "16px"}))

(def site-footer {:text-align "center"})