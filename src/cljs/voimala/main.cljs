(ns voimala.main
  (:require
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]
    [voimala.styles.global :as g-styles]
    [voimala.styles.layout :as layout]
    [voimala.views.welcome :as welcome-view]
    [voimala.views.writing :as writing-view]
    [voimala.views.photography :as photography-view]
    [voimala.views.misc :as misc-view]
    [voimala.views.contact :as contact-view]
    [voimala.views.software :as software-view]
    [voimala.views.music :as music-view]
    [reagent.core :as r]
    [voimala.ui.general :as ui]))

(defn- site-footer []
  [:footer (use-style layout/site-footer)
   "Copyright © Jari Hanhela 2012-"
   [:p "This website is powered by "
    [:a {:href "http://clojurescript.org"} "ClojureScript"]
    ". "
    "Source code available "
    [:a {:href "https://github.com/Jarzka/Voimala.org"} "here"]
    "."]])

(defn- site-body []
  [:div
   [:div (use-style layout/page-content)
    [:main
     [welcome-view/welcome]
     [photography-view/photography]
     [software-view/software]
     [writing-view/writing]
     [music-view/music]
     [misc-view/misc]
     [contact-view/contact]]
    [site-footer]]])

(defn- main-content []
  [site-body])

(defn- init []
  (g-styles/init-styles))

(defn ^:export start []
  (init)
  (r/render main-content (.getElementById js/document "app")))