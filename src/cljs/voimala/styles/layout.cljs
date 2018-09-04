(ns voimala.styles.layout
  (:require [stylefy.core :as stylefy]
            [garden.color :as color]))

(def dark-box {:border-radius "5px"
               :background-color "rgba(0, 0, 0, 0.85)"
               :border "1px solid rgba(255, 255, 255, 0.1)"})

(def site-header
  (merge
    dark-box
    {:display "flex"
     :flex-direction "row"
     :justify-content "center"
     :height "7rem"
     :align-items "center"
     :padding-bottom "1rem"
     :padding-top "1rem"
     ::stylefy/sub-styles
     {:logo-and-description {:text-align "center"}
      :logo {:display :block
             :margin-left "auto"
             :margin-right "auto"
             :width "18rem"
             :max-width "100%"}
      :site-description {:padding-top "0.3rem"
                         :padding-bottom "0.3rem"}}}))

(def page-content (merge dark-box
                         {:margin-left "auto"
                          :margin-right "auto"
                          :margin-top "1rem"
                          :max-width "1024px"
                          :box-shadow "0 -0.1rem 0.4rem rgba(0, 0, 0, 0.5) inset"
                          :padding "0.8rem"}))

(def site-footer {:margin-top "1rem"
                  :font-size "0.9rem"
                  :text-align "center"})