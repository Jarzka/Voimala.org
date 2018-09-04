(ns voimala.views.photography
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn photography []
  [:div
   [ui/h1 "Photography"]
   [ui/blockquote
    "A photograph has picked up a fact of life, and that fact will live forever."
    "- Raghu Rain"]

   [:p "See my photo gallery either on "
    [ui/link {:href "https://www.facebook.com/media/set/?set=a.2160608547288244.1073741832.100000173586073&type=1&l=b81257d4eb"}
     "Facebook"]
    " or "
    [ui/link {:href "https://www.dropbox.com/sh/spbl6pmblklrmsh/AAAxMrdQsZ-P9ADdSE-odjQka?dl=0"}
     "Dropbox"]
    "."]])