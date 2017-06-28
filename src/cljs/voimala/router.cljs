(ns voimala.router
  (:require [reagent.core :as r]))

(def current-page (r/atom :home))

(defn change-page [new-page]
  (reset! current-page new-page))