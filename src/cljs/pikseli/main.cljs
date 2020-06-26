(ns pikseli.main
  (:require
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]
    [pikseli.views.blog.blog-content :as blog-content]
    [pikseli.views.pikseli.pikseli-content :as pikseli-content]
    [pikseli.services.router :as router]
    [pikseli.styles.global :as g-styles]
    [pikseli.styles.layout :as layout]
    [pikseli.ui.modal :as modal]
    [reagent.dom :as reagent-dom]))

(defn- site-footer []
  [:footer (use-style layout/site-footer)
   "Copyright © Jari Hanhela"
   [:p "Powered by "
    [:a {:href "http://clojurescript.org"} "ClojureScript"]
    ". "
    "Source code available "
    [:a {:href "https://github.com/Jarzka/pikseli.org"} "here"]
    "."]])

(defn content []
  [:div
   (if (router/uri-is-blog?)
     [blog-content/main]
     [pikseli-content/content])])

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
  (reagent-dom/render main-content (.getElementById js/document "app")))