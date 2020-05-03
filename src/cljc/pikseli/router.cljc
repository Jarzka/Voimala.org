(ns pikseli.router
  (:require [clojure.string :as string]))

(defn uri-parts [uri]
  (vec (rest (string/split uri #"/"))))

(defn uri-points-to-blog? [uri]
  (let [uri-first-part (first (uri-parts uri))]
    (boolean (= uri-first-part "blog"))))

(defn blog-post-id
  "Parses blog post id from URL, or returns nil if post id was not found"
  [uri]
  (when (uri-points-to-blog? uri)
    (second (uri-parts uri))))