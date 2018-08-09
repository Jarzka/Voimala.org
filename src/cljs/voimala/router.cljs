(ns voimala.router
  (:require [reagent.core :as r]
            [voimala.router-utils :as router-utils]))

(def current-page (r/atom nil))

(defn- update-title! [current-page]
  (set! (.-innerHTML (.getElementById js/document "app-title"))
        (str "Voimala.org - " (router-utils/fmt-page current-page))))

(defn- push-state [current-page]
  (.pushState js/history
              {}
              (router-utils/fmt-page current-page)
              (str "/" (name current-page))))

(defn change-page!
  ([new-page] (change-page! new-page true))
  ([new-page push-state?]
   (reset! current-page new-page)
   (when push-state?
     (push-state new-page))
   (update-title! new-page))

  (defn read-page-from-uri! []
    (change-page! (or (router-utils/match-page-from-path
                        (-> js/window .-location .-pathname))
                      :home))))

(defn listen-state-changes! []
  (set! (.-onpopstate js/window)
        #(change-page! (or (router-utils/match-page-from-path
                             (-> js/window .-location .-pathname))
                           :home)
                       false)))