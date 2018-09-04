(ns voimala.views.misc
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn misc []
  [:div
   [ui/h1 "Misc"]
   [ui/h2 "Worms Vorg Soundbanks"]
   [ui/p "Finnish soundbanks for Worms Armageddon. This soundbank was originally created in 2009, but it has been updated since then many more times."]
   [ui/p "Download it"
    " "
    [ui/link {:href "http://voimala.org/aarrearkku"}
     "here"]
    ". See trailer"
    " "
    [ui/link {:href "https://www.youtube.com/watch?v=gWrdvquGOY0"}
     "here"]
    "."]])