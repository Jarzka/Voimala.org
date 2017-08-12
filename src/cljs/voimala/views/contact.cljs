(ns voimala.views.contact
  (:require [voimala.ui.general :as ui]))

(defn contact []
  [:div
   [ui/p "You can contact me by email: jarihanhela (at) gmail.com."]
   [ui/h1 "Social media"]
   [ui/a-some :github {:href "https://github.com/Jarzka"} "Github"]
   [ui/a-some :linkedin {:href "http://lnkd.in/5JP3nQ"} "LinkedIn"]
   [ui/a-some :twitter {:href "https://twitter.com/jarzka"} "Twitter"]
   [ui/a-some :youtube {:href "https://www.youtube.com/user/VoimalaOrg"} "YouTube (JarzkaCodes)"]])