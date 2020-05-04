(ns pikseli.services.router
  (:require [clojure.string :as string]
            [pikseli.router :as router]
            [reagent.core :as r]
            [pikseli.page-settings :as page-settings]
            [pikseli.services.dom :as dom-service]))

(defn read-host []
  (-> js/window .-location .-host))

(defn read-uri []
  (.. js/window -location -pathname))

(def uri (r/atom (read-uri)))

(defn uri-is-blog? []
  (router/uri-is-blog?
    (read-host)
    (read-uri)))

(defn update-title! []
  (dom-service/set-title (page-settings/page-title (read-uri))))

(defn update-uri! [new-uri]
  (reset! uri new-uri)
  (update-title!))