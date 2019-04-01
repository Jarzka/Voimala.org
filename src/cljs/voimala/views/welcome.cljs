(ns voimala.views.welcome
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]
            [voimala.styles.layout :as layout]))

(defn welcome []
  [:div
   [:header
    [:div (use-sub-style layout/site-header :logo-and-description)
     [:a {:href "http://www.voimala.org"}
      [:img (merge (use-sub-style layout/site-header :logo)
                   {:alt "Voimala.org" :src "images/logo.png"})]]
     [:span (use-sub-style layout/site-header :site-description)
      "Portfolio of Jari Hanhela"]]]

   [:section
    [:h1 "Welcome!"]
    [:p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
    [:p "The site is the result of my creative mind. It contains projects related to "
     [:a {:href "#photography"} "photography"] [:span ", "]
     [:a {:href "#software"} "software"] [:span ", "]
     [:a {:href "#writing"} "writing"] [:span ", "]
     [:a {:href "#music"} "music"] [:span ", "]
     [:a {:href "#misc"} "games"] [:span " etc. "]
     [:span "Feel free to explore!"]]
    [:p "Contents updated: 17.3.2019."]]])