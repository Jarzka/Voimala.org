(ns pikseli.core
  (:require [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [compojure.route :refer [files not-found resources]]
            [compojure.handler :refer [site]]
            [pikseli.index :as index]
            [pikseli.settings :as settings]
            [pikseli.api.post-api :as post-api]
            [hiccup.core :refer :all]
            [reitit.ring :as ring]
            [reitit.spec :as rs]
            [reitit.coercion.spec]
            [reitit.ring.coercion :as rrc]
            [org.httpkit.server :refer :all]
            [cognitect.transit :as transit])
  (:gen-class)
  (:import (java.io ByteArrayOutputStream)))

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
       ["/post/:id" {:get {:parameters {:path {:id string?}}
                           ;:responses {200 {:metadata map? :html string?}}
                           :handler post-api/get-post}}]
       ["/post-ids/:page" {:get {:parameters {:path {:page int?}}
                                 ;:responses {200 {:body vector?}}
                                 :handler post-api/get-posts}}]])))

(defn write-transit [response]
  (let [out (ByteArrayOutputStream. 4096)
        writer (transit/writer out :json)]

    (transit/write writer (:body response))

    (-> response
        (assoc-in [:headers "Content-Type"] "application/transit+json")
        (assoc :body (.toString out)))))

(defn app [request]
  (let [index-uri #{"" "/" "/blog"}]
    (if (index-uri (:uri request))
      (index request)
      (write-transit (handler request)))))

(defn -main [& []]
  (settings/read-settings)
  (reset! server (run-server app {:port 8081})))