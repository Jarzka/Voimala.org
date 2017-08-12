(ns voimala.styles.global
  (:require [stylefy.core :as stylefy]
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
                      :font-weight "normal"
                      :font-style "italic"})
  (stylefy/font-face {:font-family "open_sans"
                      :src "url('../fonts/OpenSans-Italic-webfont.woff') format('woff')"
                      :font-weight "bold"
                      :font-style "normal"}))

(def colors {:text "#FFFFFF"
             :link "#46aee5"
             :header "#FFFFFF"})


;; ****************************************************************
;; Text
;; ****************************************************************

(def p {:margin-top "0"
        :margin-bottom "1em"})

(def note {:font-style "italic"})

;; ****************************************************************
;; Headers
;; ****************************************************************

(def h {:color (:header colors)})

(def headline (merge h
                     {:border-bottom (str "1px solid " (:header colors))}))

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
;; Links
;; ****************************************************************

(def a {:color (:link colors)
        :text-decoration "none"
        :transition-property "color"
        :transition-duration "0.3s"
        ::stylefy/mode {:hover {:color (-> (:link colors)
                                           (color/lighten 20)
                                           (color/as-hex))}}})

(def a-selected (merge a
                       {:color (-> (:link colors)
                                   (color/lighten 30)
                                   (color/as-hex))}))

;; ****************************************************************
;; Root
;; ****************************************************************

(def root {:font-family "open_sans, Verdana, Helvetica, sans-serif"
           :color (:text colors)
           :background-color "black"
           :background "url(\"../images/background.jpg\")"
           :background-repeat "no-repeat"
           :background-position "center"
           :background-attachment "fixed"
           :background-size "cover"})

(defn init-styles []
  (stylefy/init)
  (define-fonts)
  #_(stylefy/font-face))