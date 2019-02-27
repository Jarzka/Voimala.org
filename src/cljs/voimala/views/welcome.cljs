(ns voimala.views.welcome
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn welcome []
  [:div
   [:h1 "Welcome!"]
   [:p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
   [:p "The site consists of my projects of various topics (photography, software, writing, games etc). Feel free to explore!"]
   [:p "Contents updated: 27.2.2019."]])