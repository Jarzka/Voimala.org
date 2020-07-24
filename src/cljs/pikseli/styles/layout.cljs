(ns pikseli.styles.layout
  (:require [stylefy.core :as stylefy]
            [garden.color :as color]
            [pikseli.utils :as utils]
            [pikseli.styles.settings :as style-settings]
            [pikseli.styles.global :as g-styles]))

(def dark-box {:border-radius "5px"
               :background-color "rgba(0, 0, 0, 0.87)"
               :backdrop-filter "blur(10px)"
               :-webkit-backdrop-filter "blur(10px)"
               :border "1px solid rgba(255, 255, 255, 0.1)"})

(def light-box {:border-radius "5px"
                :background-color "rgba(250, 250, 250)"
                :border "1px solid rgba(255, 255, 255)"})

(def themed-box (if style-settings/dark-mode? dark-box light-box))

(def logo
  {:width "12rem"
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
                             :display :flex
                             :flex-direction :column}
      :logo (merge logo {:width "12rem"})
      :logo-blog (merge logo {:width "29.5rem" :margin-bottom "2rem"})}}))

(def page-content (merge themed-box
                         (merge
                           {:margin-left "auto"
                           :margin-right "auto"
                           :margin-top "1rem"
                           :max-width "1024px"
                           :box-shadow "0 -0.1rem 0.4rem rgba(0, 0, 0, 0.5) inset"
                           :padding "0.8rem"}
                           (g-styles/on-mobile
                             {:margin-top "0"}))))

(def copyright {:margin-top "1rem"
                :text-align "center"
                :color      "#5a5a5a"})

(def site-footer {:margin-top "1rem"
                  :border-top  (str "1px solid " (:line g-styles/colors))
                  :padding-top "1rem"
                  :text-align  :center})

(def videos-wrapper {:display        :flex
                     :align-items    :center
                     :flex-direction :column})

(def iframe-wrapper {:margin-bottom "1rem"})

(defn video-width []
  (let [video-width-full 560
        video-width-mobile 320]
    (str (if (>= @utils/width (+ video-width-full 20))
           video-width-full
           video-width-mobile))))