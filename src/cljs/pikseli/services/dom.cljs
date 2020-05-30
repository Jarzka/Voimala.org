(ns pikseli.services.dom)

(defn- add-meta-tag [tag-name contents]
  (let [meta (.createElement js/document "meta")]
    (set! (.-name meta) tag-name)
    (set! (.-content meta) contents)
    (.appendChild (aget (.getElementsByTagName js/document "head") 0) meta)))

(defn- add-meta-og-tag [tag-name contents]
  (let [meta (.createElement js/document "meta")]
    (.setAttribute meta "property" tag-name) ; set! does not work here
    (set! (.-content meta) contents)
    (.appendChild (aget (.getElementsByTagName js/document "head") 0) meta)))

(defn clear-meta-tags []
  (let [meta-tags
        (.querySelectorAll
          js/document
          "meta[name='author'],
           meta[name='keywords'],
           meta[property='og:url'],
           meta[property='og:type'],
           meta[property='og:title'],
           meta[property='og:description'],
           meta[property='og:image']")]
    (when (coll? meta-tags)
      (doseq [element meta-tags]
       (.remove element)))))


(defn set-meta-tags [{:keys [title type author uri image description keywords]}]
  (clear-meta-tags)
  (when author (add-meta-tag "author" author))
  (when keyword (add-meta-tag "keywords" keywords))
  (when uri (add-meta-og-tag "og:url" uri))
  (when type (add-meta-og-tag "og:type" type))
  (when title (add-meta-og-tag "og:title" title))
  (when description (add-meta-og-tag "og:description" description))
  (when image (add-meta-og-tag "og:image" image)))

(defn set-title [text]
  (set! (.-title js/document) text))