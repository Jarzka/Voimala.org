(ns voimala.styles.global
  (:require [stylefy.core :as stylefy]))

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