(ns voimala.views.welcome
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn welcome []
  [:div
   [ui/h1 "Welcome!"]
   [ui/p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
   [ui/p "The site consists of my projects of various topics (photography, software, writing, games etc). Feel free to explore!"]
   [ui/p "Contents updated: 8.9.2018."]])