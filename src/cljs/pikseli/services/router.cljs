(ns pikseli.services.router
  (:require [clojure.string :as string]
            [pikseli.router :as router]
            [reagent.core :as r]))

(defn read-uri []
  (.. js/window -location -pathname))

(def uri (r/atom (read-uri)))

(defn uri-is-blog? []
  (router/uri-is-blog?
    (-> js/window .-location .-host)
    (read-uri)))