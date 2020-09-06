(ns pikseli.backend-styles
  (:require [stylefy.core :as stylefy]))

(defn create-constant-styles []
  (stylefy/font-face {:font-family "open_sans"
                      :src         "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
                      :font-weight "normal"
                      :font-style  "normal"})
  (stylefy/font-face {:font-family "open_sans"
                      :src         "url('../fonts/OpenSans-BoldItalic-webfont.woff') format('woff')"
                      :font-weight "bold"
                      :font-style  "italic"})
  (stylefy/font-face {:font-family "open_sans"
                      :src         "url('../fonts/OpenSans-Bold-webfont.woff') format('woff')"
                      :font-weight "bold"
                      :font-style  "normal"})
  (stylefy/font-face {:font-family "open_sans"
                      :src         "url('../fonts/OpenSans-Italic-webfont.woff') format('woff')"
                      :font-weight "normal"
                      :font-style  "italic"})

  (stylefy/tag "p" {:margin-top    "0"
                    :margin-bottom "1rem"})

  (stylefy/tag "blockquote" {:font-style   :italic
                             :padding-left "1rem"}))