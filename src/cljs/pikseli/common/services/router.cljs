(ns pikseli.common.services.router
  (:require [pikseli.common.router :as router]
            [reagent.core :as r]
            [pikseli.common.page-settings :as page-settings]
            [pikseli.common.services.dom :as dom-service]))

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

; Listen back button
(.addEventListener js/window "popstate"
                   (fn []
                     (update-uri! (read-uri))))