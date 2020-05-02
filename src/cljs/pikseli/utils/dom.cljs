(ns pikseli.utils.dom)

(defn set-title [text]
  (set! (.-title js/document) text))