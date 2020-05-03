(ns pikseli.core
  (:require [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [compojure.route :refer [files not-found resources]]
            [compojure.handler :refer [site]]
            [pikseli.index :as index]
            [pikseli.settings :as settings]
            [hiccup.core :refer :all]
            [org.httpkit.server :refer :all])
  (:gen-class))

(defonce server (atom nil))

(defn stop []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn app [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str "<!DOCTYPE html>" (html (index/index request)))})

(defn -main [& []]
  (settings/read-settings)
  (reset! server (run-server app {:port 8081})))