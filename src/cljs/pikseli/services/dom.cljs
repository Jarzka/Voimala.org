(ns pikseli.services.dom)

(defn set-og-tags [{:keys [title url type author image description keywords]}]
  )

(defn set-title [text]
  (set! (.-title js/document) text))