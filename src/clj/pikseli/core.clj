(ns pikseli.core
  (:require [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [compojure.route :refer [files not-found resources]]
            [compojure.handler :refer [site]]
            [pikseli.index :as index]
            [pikseli.settings :as settings]
            [hiccup.core :refer :all]
            [reitit.ring :as ring]
            [reitit.coercion.spec]
            [reitit.ring.coercion :as rrc]
            [org.httpkit.server :refer :all])
  (:gen-class))

(defonce server (atom nil))

(defn stop []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn index [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str "<!DOCTYPE html>" (html (index/index request)))})

(def handler
  (ring/ring-handler
    (ring/router
      ["/api"
       ["/post" {:get {:responses {200 {:body {:data string?}}}
                       :handler (fn [_]
                                  {:status 200
                                   :body {:data "Post"}})}}]
       ["/posts" {:get {:responses {200 {:body {:data string?}}}
                        :handler (fn [_]
                                   {:status 200
                                    :body {:data "Posts"}})}}]]
      ;; Router data effecting all routes
      {:data {:coercion reitit.coercion.spec/coercion
              :middleware [rrc/coerce-exceptions-middleware
                           rrc/coerce-request-middleware
                           rrc/coerce-response-middleware]}})))

(defn app [request]
  (let [index-uri #{"" "/" "/blog"}]
    (if (index-uri (:uri request))
      (index request)
      (handler request))))

(defn -main [& []]
  (settings/read-settings)
  (reset! server (run-server app {:port 8081})))