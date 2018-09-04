(ns voimala.views.welcome
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn welcome []
  [:div
   [ui/h1 "Welcome!"]
   [ui/p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
   [ui/p "The site consists of my projects of various topics (software, photography, writing etc). Feel free to explore!"]
   [ui/p "This website is powered by "
    [ui/link {:href "http://clojurescript.org"} "ClojureScript"]
    ". "
    "Source code available "
    [ui/link {:href "https://github.com/Jarzka/Voimala.org"} "here"]
    "."]])