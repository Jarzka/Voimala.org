(ns pikseli.api.markdown-parser
  (:require [markdown.core :refer [md-to-html-string-with-meta]])
  (:import (org.jsoup.parser Parser)
           (org.jsoup.select Selector)
           (org.jsoup.parser Tag)
           (org.jsoup.nodes Element)))

(def baseurl "")

(defn image-titles-to-figures [document]
  (let [images (.select document "img")]
    (doseq [image images]
      (when (seq (.attr image "title"))
        (let [imageClone (.clone image)
              imageTitle (.attr imageClone "title")
              figure (Element. (Tag/valueOf "figure") baseurl)
              figcaption (Element. (Tag/valueOf "figcaption") baseurl)
              _ (.text figcaption imageTitle)
              _ (doto figure
                  (.appendChild imageClone)
                  (.appendChild figcaption))]
          (.replaceWith image figure))))))

(defn parse-markdown [markdown]
  (let [parsed-md (md-to-html-string-with-meta markdown)
        md-as-html (:html parsed-md)
        document (Parser/parse md-as-html baseurl)]

    (image-titles-to-figures document)

    (assoc parsed-md :html (.html document))))