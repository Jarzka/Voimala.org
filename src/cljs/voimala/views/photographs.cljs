(ns voimala.views.photographs
  (:require [voimala.ui.general :as ui]
            [stylefy.core :refer [use-style]]
            [voimala.ui.general :refer [link]]))

(defn photographs []
  [:div
   [:blockquote "\"A photograph has picked up a fact of life, and that fact will live forever.\""
    [:br] "- Raghu Rai\n"]

   [:p "See my photo gallery either on "
    [link {:href "https://www.facebook.com/media/set/?set=a.2160608547288244.1073741832.100000173586073&type=1&l=b81257d4eb"}
     "Facebook"]
    " or "
    [link {:href "https://www.dropbox.com/sh/spbl6pmblklrmsh/AAAxMrdQsZ-P9ADdSE-odjQka?dl=0"}
     "Dropbox"]
    "."]])