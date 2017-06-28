(ns voimala.router
  (:require [reagent.core :as r]))

(def current-page (r/atom nil))

(def pages #{:home :software :writing :photographs :contact})

(def fmt-page
  {:home "Home"
   :software "Software"
   :writing "Writing"
   :photographs "Photographs"
   :contact "Contact"})

(defn update-title! [current-page]
  (set! (.-innerHTML (.getElementById js/document "app-title"))
        (str "Voimala.org - " (fmt-page current-page))))

(defn update-uri [current-page]
  (.pushState js/history
              {}
              (fmt-page current-page)
              (str "/" (name current-page))))

(defn change-page! [new-page]
  (reset! current-page new-page)
  (update-title! @current-page)
  (update-uri new-page))

(defn read-page-from-uri! []
  (let [path (-> js/window .-location .-pathname)
        matched-page (first (filter
                              (fn [page-key]
                                (= (str "/" (name page-key))
                                   path))
                              pages))]
    (change-page! (or matched-page :home))))



