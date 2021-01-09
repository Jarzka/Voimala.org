(ns pikseli.portfolio.views.welcome
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.common.styles.global :as g-styles]
            [pikseli.common.styles.layout :as layout]))

(defn welcome []
  [:div
   [:header
    [:div (use-sub-style layout/site-header :logo-and-description)
     [:div
      [:a {:href "http://www.pikseli.org"}
      [:img (use-sub-style layout/site-header :logo {:alt "pikseli.org" :src "/images/logo_pikseli.png"})]]]
     [:span "Portfolio of Jari Hanhela"]]]

   [:section
    [:h1 "Welcome!"]
    [:p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
    [:p "The site is the result of my creative mind. It contains projects related to "
     [:a {:href "#photography"} "photography"] [:span ", "]
     [:a {:href "#filming"} "filming"] [:span ", "]
     [:a {:href "#writing"} "writing"] [:span ", "]
     [:a {:href "#software"} "software"] [:span " and "]
     [:a {:href "#music"} "music"] [:span ". "]]]])