(ns pikseli.services.router
  (:require [clojure.string :as string]))

(defn read-hash []
  (-> js/window
      .-location
      .-hash
      (string/replace "#" "")))

(defn on-hash-change! [changed]
  (set! (.. js/window -onhashchange) changed))