(ns pikseli.styles.layout
  (:require [stylefy.core :as stylefy]
            [garden.color :as color]
            [pikseli.utils :as utils]
            [pikseli.styles.settings :as style-settings]))

(def dark-box {:border-radius "5px"
               :background-color "rgba(0, 0, 0, 0.85)"
               :border "1px solid rgba(255, 255, 255, 0.1)"})

(def light-box {:border-radius "5px"
                :background-color "rgba(250, 250, 250, 0.95)"
                :border "1px solid rgba(255, 255, 255, 0.9)"})

(def themed-box (if style-settings/dark-mode? dark-box light-box))

(def logo
  {:display :block
   :margin-left "auto"
   :margin-right "auto"
   :width "12rem"
   :max-width "100%"})

(def site-header
  (merge
    themed-box
    {:display "flex"
     :flex-direction "row"
     :justify-content "center"
     :height "5rem"
     :align-items "center"
     :padding-bottom "1rem"
     :padding-top "1rem"
     ::stylefy/sub-styles
     {:logo-and-description {:text-align "center"
                             :margin-bottom "1rem"}
      :logo (merge logo {:width "12rem"})
      :logo-blog (merge logo {:width "29.5rem" :margin-bottom "2rem"})
      :site-description {:padding-top "0.3rem"
                         :padding-bottom "0.3rem"}}}))

(def page-content (merge themed-box
                         {:margin-left "auto"
                          :margin-right "auto"
                          :margin-top "1rem"
                          :max-width "1024px"
                          :box-shadow "0 -0.1rem 0.4rem rgba(0, 0, 0, 0.5) inset"
                          :padding "0.8rem"}))

(def site-footer {:margin-top "1rem"
                  :font-size "0.75rem"
                  :text-align "center"})

(def videos-wrapper {:display :flex
                     :align-items :center
                     :flex-direction :column})

(def iframe-wrapper {:margin-bottom "1rem"})

(defn video-width []
  (let [video-width-full 560
        video-width-mobile 320]
    (str (if (>= @utils/width (+ video-width-full 20))
           video-width-full
           video-width-mobile))))