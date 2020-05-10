(ns pikseli.styles.global
  (:require [stylefy.core :as stylefy]
            [pikseli.styles.settings :as style-settings]
            [garden.color :as color]))

;; ****************************************************************
;; Utils
;; ****************************************************************

(def center-block {:margin-left "auto"
                   :margin-right "auto"})

(def inline-block {:display "inline-block"})

(def hidden {:display "none"})

(def phone-max-width "450px")
(def tablet-max-width "1024px")

(defn on-mobile [style]
  {::stylefy/media {{:max-width tablet-max-width}
                    style}})

(defn on-tablet [style]
  {::stylefy/media {{:min-width phone-max-width
                     :max-width tablet-max-width}
                    style}})

(defn on-phone [style]
  {::stylefy/media {{:max-width phone-max-width}
                    style}})

;; ****************************************************************
;; Fonts & Colors
;; ****************************************************************

(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                    :font-weight "normal"
                    :font-style "normal"})
(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-BoldItalic-webfont.woff') format('woff')"
                    :font-weight "bold"
                    :font-style "italic"})
(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Bold-webfont.woff') format('woff')"
                    :font-weight "bold"
                    :font-style "normal"})
(stylefy/font-face {:font-family "open_sans"
                    :src "url('../fonts/OpenSans-Italic-webfont.woff') format('woff')"
                    :font-weight "normal"
                    :font-style "italic"})

(def colors {:text (if style-settings/dark-mode? "#eaeaea" "#121212")
             :link (if style-settings/dark-mode? "#46aee5" "#b9511a")
             :background-secondary "rgba(14, 31, 40, 0.85)"
             :header (if style-settings/dark-mode? "#eaeaea" "#121212")})

(def text-small {:font-size "0.8rem"})

;; ****************************************************************
;; Text
;; ****************************************************************

(stylefy/class "body-loaded" {:color (:text colors)})

(stylefy/tag "p" {:margin-top "0"
                  :margin-bottom "1rem"})

(stylefy/tag "blockquote" {:font-style :italic
                           :padding-left "1rem"})

(def text-center {:text-align :center})

(def text-smaller {:font-size "0.8rem"})

;; ****************************************************************
;; Headings
;; ****************************************************************

(def h {:color (:header colors)})

(stylefy/tag "h1" (merge h
                         {:margin-top "1.5rem"
                          :margin-bottom "0.6rem"
                          :padding "0.5rem"
                          :font-size "1.6rem"
                          :font-weight :bold
                          ::stylefy/mode {:first-of-type {:margin-top 0}}
                          :border-bottom (str "0.1rem solid " (:header colors))}))

(stylefy/tag "h2" (merge h
                         {:margin-top "1rem"
                          :margin-bottom "1rem"
                          :font-size "1.2rem"}))

(stylefy/tag "h3" (merge h
                         {:font-size "1.1rem"}))

(stylefy/tag "h4" (merge h
                         {:font-size "1.0rem"
                          :margin-bottom "0"}))

;; ****************************************************************
;; Links & Buttons
;; ****************************************************************

(def clickable {:cursor "pointer"})
(def link {:color (:link colors)
           :text-decoration "none"
           :transition-property "color"
           :transition-duration "0.3s"
           ::stylefy/mode {:hover {:color (-> (:link colors)
                                              (color/lighten 10)
                                              (color/as-hex))}}})

(stylefy/tag "a" link)

(defn a-some-before [some]
  {::stylefy/mode
   {:before
    {:background-image (str "url(\"/images/some_" (name some) ".png\")")
     :background-repeat "no-repeat"
     :background-size "80%"
     :content "\"\""
     :padding-left "2rem"}}})

(def a-some (merge link
                   {:display "block"
                    :margin-top 0
                    :margin-bottom 0
                    :height "2rem"}))

(def a-button (merge
                clickable
                {:display "block"
                :overflow "hidden"
                :min-width "120px"
                :height "35px"
                :color (:text colors)
                :margin-right "5px"
                :margin-bottom "5px"
                :text-align "center"
                :padding-top "5px"
                :padding-bottom "5px"
                :padding-left "10px"
                :padding-right "10px"
                :text-decoration "none"
                :box-shadow "0px 1px 3px rgba(000,000,000,0.5), inset 0px 0px 2px rgba(255,255,255,0.7)"
                :text-shadow "0px -1px 0px rgba(000,000,000,0.4), 0px 1px 0px rgba(255,255,255,0.3)"
                :background "linear-gradient(to bottom, #46a9de 0%, #1a527a)"
                ::stylefy/mode {:hover
                                {:background "linear-gradient(to bottom, #51bffb 0%, #216ca2)"}}
                :box-sizing "border-box"
                :border "1px solid black"
                :border-radius "5px"}))

;; ****************************************************************
;; API
;; ****************************************************************

(defn init-styles []
  (stylefy/init))