(ns voimala.main
  (:require [voimala.views.home :as home]
            [voimala.views.software :as software]
            [voimala.router :as router]
            [reagent.core :as r]))

(defn page [current-page]
  [:article
   (when (= current-page :home)
     [home/home])])

(defn- main-content []
  (let [current-page @router/current-page]
    [:div
     [:header.site-header
      [:div.logo-and-description
       [:img.logo {:alt "Voimala.org", :src "images/logo.png"}]
       [:span.site-description "Portfolio of Jari Hanhela"]]
      [:nav.site-navigation
       [:ul
        [:li
         [:a {:href "/home" :class (when (= current-page :home) "selected")} "Home"]]
        [:li
         [:a {:href "/software" :class (when (= current-page :oftware) "selected")} "Software"]]
        [:li
         [:a {:href "/photographs" :class (when (= current-page :photographs) "selected")} "Photographs"]]
        [:li
         [:a {:href "/writing" :class (when (= current-page :writing) "selected")} "Writing"]]
        [:li
         [:a {:href "/contact" :class (when (= current-page :contact) "selected")} "Contact"]]]]]

     [:div.page-content
      [:main
       [page current-page]]
      [:footer.site-footer
       "Copyright © Jari Hanhela 2012-"]]
     ]))

(defn ^:export start []
  (r/render main-content (.getElementById js/document "app")))