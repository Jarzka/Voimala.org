(ns pikseli.services.router
  (:require [clojure.string :as string]))

(def domain #{"pikseli" "pikselidev"})

(defn read-hash []
  (-> js/window
      .-location
      .-hash
      (string/replace "#" "")))

(defn on-hash-change! [changed]
  (set! (.. js/window -onhashchange) changed))

(defn hash-valid? []
  (string/starts-with? (read-hash) "/"))

(defn hash-first-part []
  (when (hash-valid?)
    (let [hash-splitted (string/split (read-hash) "/")
          ; Note: First element is empty string
          hash-first-part (second hash-splitted)]
      hash-first-part)))

(defn subdomain-points-to-blog? []
  (let [host (-> js/window .-location .-host)
        host-splitted (string/split host ".")
        subdomain (when (domain (second host-splitted)) ; Sub-domain used
                    (first host-splitted))
        blog-subdomains #{"blog" "metsassa" "metsässä" "kotonaikimetsassa" "kotonaikimetsässä"}]
    (boolean (when subdomain
               (blog-subdomains subdomain)))))

(defn hash-points-to-blog? []
  (let [hash-first-part (hash-first-part)
        blog-hash #{"blog" "kotonaikimetsassa" "kotonaikimetsässä"}]
    (boolean (blog-hash hash-first-part))))

(defn url-is-blog? []
  (or (subdomain-points-to-blog?)
      (hash-points-to-blog?)))