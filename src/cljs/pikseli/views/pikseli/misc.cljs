(ns pikseli.views.pikseli.misc
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.ui.general :as ui]))

(defn misc []
  [:section
   [:a {:id "misc"}]
   [:h1 "Miscelanous"]

   [:h2 "Worms Vorg Soundbanks"]
   [:p "Finnish soundbanks for"
    " "
    [:a {:href "https://store.steampowered.com/app/217200/Worms_Armageddon/"}
     "Worms Armageddon game"]
    ". This soundbank was originally created in 2009, but it has been updated many times since then. Warning: contains lots of cursing. :-)"]
   [:p "Download it"
    " "
    [:a {:href "http://pikseli.org/aarrearkku"}
     "here"]
    ". See the trailer"
    " "
    [:a {:href "https://www.youtube.com/watch?v=gWrdvquGOY0"}
     "here"]
    "."]

   #_[:h2 "Steam Workshop items"]
   #_[:p "My"
    " "
    [:a {:href "https://steamcommunity.com/id/jarzka/myworkshopfiles/"}
     "Steam Workshop files"]
    " contains stuff for other games (CSGO maps etc.)."]])