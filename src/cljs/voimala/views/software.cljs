(ns voimala.views.software
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]
            [voimala.styles.views.software :as pstyle]))

(defn- libraries []
  [:div
   [ui/h2 "Software libraries"]
   [:ul
    [:li
     [ui/link {:href "https://github.com/Jarzka/namespacefy"}
      "namespacefy"]
     [:span " "]
     "is a simple Clojure(Script) library which aims to make it easy to keep keys namespaced."]
    [:li
     [ui/link {:href "https://github.com/Jarzka/stylefy"}
      "stylefy"]
     [:span " "]
     " makes it possible to define UI component styles as Clojure data."]]])

(defn project-card [{:keys [title image-file desc]}]
  [:div.card (use-style pstyle/card)
   [:img.card-img-top {:alt "", :src (str "images/" image-file)}]
   [:div.card-body
    [:h5.card-title title]
    [:p.card-text desc]]])

(defn software []
  [:div
   [ui/h1 "Software"]
   [ui/blockquote
    "Our civilization depends critically on software; it had better be quality software."
    "Bjarne Stroustrup"]

   [:div.card-deck
    [project-card {:title "Ajokit" :image-file "ajokit.jpg" :desc "A simple grid-based traffic simulation application which also has a real-time map editing capability."}]
    [project-card {:title "JarzkaChess" :image-file "jarzkachess.png" :desc "A chess game which includes an artifical intelligence to challenge beginning chess players."}]
    [project-card {:title "MyRTS" :image-file "myrts.jpg" :desc "MyRTS is a multi player Real Time Strategy game prototype. The game is currently in very early stage but some core features have been implemented already like giving simple commands to units and synchronizing the game over network using simultaneous simulations with lockstep-like model. This kind of architectural style has been used in many classic RTS games like Age of Empires."}]]

   [libraries]

   [ui/p "More software projects available on my"
    " "
    [ui/link {:href "https://github.com/Jarzka"} "GitHub profile"]
    "."]])
