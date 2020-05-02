(ns pikseli.main
  (:require
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]
    [pikseli.blog-content :as blog-content]
    [pikseli.main-content :as main-content]
    [pikseli.services.router :as router]
    [pikseli.styles.global :as g-styles]
    [pikseli.styles.layout :as layout]
    [pikseli.views.welcome :as welcome-view]
    [pikseli.views.writing :as writing-view]
    [pikseli.views.photography :as photography-view]
    [pikseli.views.misc :as misc-view]
    [pikseli.views.contact :as contact-view]
    [pikseli.views.software :as software-view]
    [pikseli.views.music :as music-view]
    [pikseli.views.filming :as filming-view]
    [pikseli.ui.modal :as modal]
    [reagent.core :as r]
    [pikseli.ui.general :as ui]))

(defn- site-footer []
  [:footer (use-style layout/site-footer)
   "Copyright © Jari Hanhela 2012-"
   [:p "This website is powered by "
    [:a {:href "http://clojurescript.org"} "ClojureScript"]
    ". "
    "Source code available "
    [:a {:href "https://github.com/Jarzka/pikseli.org"} "here"]
    "."]])

(defn content []
  [:div
   (if (router/url-is-blog?)
     [blog-content/content]
     [main-content/content])])

(defn- site-body []
  [:div
   [modal/modal-lg]
   [:div (use-style layout/page-content)
    [:main
     [content]]
    [site-footer]]])

(defn- main-content []
  [site-body])

(defn- init []
  (g-styles/init-styles))

(defn ^:export start []
  (init)
  (r/render main-content (.getElementById js/document "app")))