(ns pikseli.services.router
  (:require [clojure.string :as string]))

(defn read-hash []
  (-> js/window
      .-location
      .-hash
      (string/replace "#" "")))

(defn on-hash-change! [changed]
  (set! (.. js/window -onhashchange) changed))

(defn url-is-blog? [hash]
  (case hash
    "blog" true
    "kotonaikimetsassa" true
    "kotonaikimetsässä" true
    false))