(ns voimala.core
  (:require [compojure.route :refer [files not-found resources]]
            [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [voimala.views.index :as index]
            [voimala.settings :as settings]
            [hiccup.core :refer :all]
            [taoensso.timbre :refer :all]
            [org.httpkit.server :refer :all]
            [ring.util.response :as resp])
  (:gen-class))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn app [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str "<!DOCTYPE html>"
              (html (index/index req)))})

(defn -main [& [dev-mode]]
  (when dev-mode
    (reset! settings/dev-mode? true))

  (reset! server (run-server app
                             {:port (if dev-mode
                                      8081
                                      80)})))