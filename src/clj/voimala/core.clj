(ns voimala.core
  (:require [compojure.route :refer [files not-found resources]]
            [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [voimala.views.template :as template]
            [voimala.views.home :as home]
            [voimala.views.software :as software]
            [voimala.views.photographs :as photographs]
            [voimala.views.blog :as blog]
            [voimala.views.writing :as writing]
            [voimala.views.contact :as contact]
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

(defn resolve-view-name [req-uri]
  (case req-uri
    "/" "Home"
    "/home" "Home"
    "/software" "Software"
    "/photographs" "Photographs"
    "/blog" "Blog"
    "/contact" "Contact"
    "/writing" "Writing"))

(defn handle-view [req]
  (debug "Returning view " (:uri req))
  (let [view-fn (case (:uri req)
                  "/" home/home
                  "/home" home/home
                  "/software" software/software
                  "/photographs" photographs/photographs
                  "/blog" blog/blog
                  "/writing" writing/writing
                  "/contact" contact/contact)]
    (str "<!DOCTYPE html>"
         (html (template/template
                 (resolve-view-name (:uri req))
                 (view-fn req))))))

(defroutes all-routes
  ; Views
  (GET "/" [] handle-view)
  (GET "/home" [] handle-view)
  (GET "/software" [] handle-view)
  (GET "/photographs" [] handle-view)
  (GET "/writing" [] handle-view)
  (GET "/blog" [] handle-view)
  (GET "/contact" [] handle-view)
  ; Resources
  (resources "/")
  ; 404
  (not-found "<p>Page not found.</p>"))

(defn -main [& [dev-mode]]
  (when dev-mode
    (reset! settings/dev-mode? true))
  (reset! server (run-server (site #'all-routes) {:port 81})))