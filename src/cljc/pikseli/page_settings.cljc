(ns pikseli.page-settings
  (:require [clojure.string :as string]))

(def page-titles
  {"/" "Pikseli.org - Portfolio of Jari Hanhela"
   "/blog/" "Kotona ikimetsässä -retkiblogi" })

(defn page-title [uri]
  (or (get page-titles uri)
      (get page-titles (str uri "/"))))

(defn blog-post-title [title]
  (str (str title " - ") (page-title "/blog")))

(def blog-logo-url "/images/logo_blog.png")