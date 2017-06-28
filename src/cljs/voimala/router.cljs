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

(defn push-state [current-page]
  (.pushState js/history
              {}
              (fmt-page current-page)
              (str "/" (name current-page))))

(defn change-page!
  ([new-page] (change-page! new-page true))
  ([new-page push-state?]
  (reset! current-page new-page)
  (when push-state?
    (push-state new-page))
  (update-title! new-page)))

(defn match-page-from-uri []
  (let [path (-> js/window .-location .-pathname)
        matched-page (first (filter
                              (fn [page-key]
                                (= (str "/" (name page-key))
                                   path))
                              pages))]
    matched-page))

(defn read-page-from-uri! []
  (change-page! (or (match-page-from-uri) :home)))

(defn listen-state-changes! []
  (set! (.-onpopstate js/window)
        (fn [event]
          (change-page! (or (match-page-from-uri) :home)
                        false))))