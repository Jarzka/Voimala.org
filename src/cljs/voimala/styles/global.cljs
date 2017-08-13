(ns voimala.styles.global
  (:require [stylefy.core :as stylefy]
            [voimala.styles.shared :as shared-styles]
            [garden.color :as color]))

;; ****************************************************************
;; Fonts & Colors
;; ****************************************************************

(defn define-fonts []
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
                      :font-style "italic"}))

;; ****************************************************************
;; Text
;; ****************************************************************

(def p {:margin-top "0"
        :margin-bottom "1em"})

;; ****************************************************************
;; Headings
;; ****************************************************************

(def h {:color (:header shared-styles/colors)})

(def page-headline (merge h
                          {:border-bottom (str "1px solid "
                                               (:header shared-styles/colors))
                           :text-align "center"
                           :text-transform "uppercase"
                           :letter-spacing "0.1em"}))

(def h1 (merge h
               {:margin-top "0.8em"
                :margin-bottom "0.6em"}))

(def h2 (merge h
               {:margin-top "0.6em"
                :margin-bottom "0.4em"
                :font-size "1.2em"}))

(def h3 (merge h
               {:font-size "1.1em"}))

(def h4 (merge h
               {:font-size "1.0em"
                :margin-bottom "0"}))

;; ****************************************************************
;; Links & Buttons
;; ****************************************************************

(def clickable {:cursor "pointer"})

(def a {:color (:link shared-styles/colors)
        :text-decoration "none"
        :transition-property "color"
        :transition-duration "0.3s"
        ::stylefy/mode {:hover {:color (-> (:link shared-styles/colors)
                                           (color/lighten 10)
                                           (color/as-hex))}}})

(def a-selected (merge a
                       {:color (-> (:link shared-styles/colors)
                                   (color/lighten 30)
                                   (color/as-hex))}))

(defn a-some-before [some]
  {::stylefy/mode
   {:before
    {:background-image (str "url(\"images/some_" (name some) ".png\")")
     :background-repeat "no-repeat"
     :background-size "80%"
     :content "\"\""
     :padding-left "25px"}}})

(def a-some (merge a
                   {:display "block"
                    :margin-top 0
                    :margin-bottom 0
                    :height "2em"
                    :width "220px"}))


;; ****************************************************************
;; Utils
;; ****************************************************************

(def clearfix {:display "block"
               :clear "both"})

(defn init-styles []
  (stylefy/init)
  (define-fonts))