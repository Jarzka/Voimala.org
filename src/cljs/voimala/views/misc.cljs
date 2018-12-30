(ns voimala.views.misc
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn misc []
  [:div
   [ui/h1 "Miscelanous"]

   [ui/h2 "Worms Vorg Soundbanks"]
   [ui/p "Finnish soundbanks for"
    " "
    [ui/link {:href "https://store.steampowered.com/app/217200/Worms_Armageddon/"}
     "Worms Armageddon game"]
    ". This soundbank was originally created in 2009, but it has been updated many times since then. Warning: contains lots of cursing. :-)"]
   [ui/p "Download it"
    " "
    [ui/link {:href "http://voimala.org/aarrearkku"}
     "here"]
    ". See the trailer"
    " "
    [ui/link {:href "https://www.youtube.com/watch?v=gWrdvquGOY0"}
     "here"]
    "."]

   [ui/h2 "Steam Workshop items"]
   [ui/p "My"
    " "
    [ui/link {:href "https://steamcommunity.com/id/jarzka/myworkshopfiles/"}
     "Steam Workshop files"]
    " contains stuff for other games (CSGO maps etc.)."]])