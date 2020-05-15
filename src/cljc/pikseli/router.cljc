(ns pikseli.router
  (:require [clojure.string :as string]))

(def domain #{"pikseli" "pikselidev"})

(defn uri-parts [uri]
  (vec (rest (string/split uri #"/"))))

(defn uri-points-to-blog? [uri]
  (let [uri-first-part (first (uri-parts uri))]
    (boolean (= uri-first-part "blog"))))

(defn subdomain-points-to-blog? [host]
  (let [host-splitted (string/split host #"\.")
        subdomain (when (domain (second host-splitted)) ; Sub-domain used
                    (first host-splitted))
        blog-subdomains #{"blog" "metsassa" "metsässä" "xn--metsss-euac"}]
    (boolean (when subdomain
               (blog-subdomains subdomain)))))

(defn uri-is-blog? [host uri]
  (or (subdomain-points-to-blog? host)
      (uri-points-to-blog? uri)))

(defn uri-is-blog-about? [uri]
  (= uri "/blog/about"))

(defn blog-post-id
  "Parses blog post id from URL, or returns nil if post id was not found"
  [uri]
  (when (and (uri-points-to-blog? uri)
             (not (uri-is-blog-about? uri)))
    (second (uri-parts uri))))