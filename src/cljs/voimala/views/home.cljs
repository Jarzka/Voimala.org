(ns voimala.views.home
  (:require [voimala.ui.general :as ui]))

(defn home []
  [:div
   [ui/h1 "Welcome!"]
   [ui/p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
   [ui/p "The main contents of this site are various software development projects I have completed mostly on my free time. I have many years of experience in programming and software development, mostly in web development (both frontend and backend) and game programming."]
   [ui/p "This website is powered by "
    [ui/link {:href "http://clojure.org"} "Clojure"]
    ". "
    "Source code available "
    [ui/link {:href "https://github.com/Jarzka/Voimala.org"} "here"]
    "."]])