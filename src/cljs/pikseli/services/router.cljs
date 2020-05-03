(ns pikseli.services.router
  (:require [clojure.string :as string]
            [pikseli.router :as router]
            [reagent.core :as r]))

(def domain #{"pikseli" "pikselidev"})

(defn read-uri []
  (.. js/window -location -pathname))

(defn subdomain-points-to-blog? []
  (let [host (-> js/window .-location .-host)
        host-splitted (string/split host ".")
        subdomain (when (domain (second host-splitted)) ; Sub-domain used
                    (first host-splitted))
        blog-subdomains #{"blog" "metsassa" "metsässä"}]
    (boolean (when subdomain
               (blog-subdomains subdomain)))))

(defn uri-is-blog? []
  (or (subdomain-points-to-blog?)
      (router/uri-points-to-blog? (read-uri))))