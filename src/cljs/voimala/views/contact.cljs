(ns voimala.views.contact
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]))

(defn contact []
  [:div
   [ui/h1 "Contact"]
   [ui/h2 "Email"]
   [ui/p "You can contact me by email: jarihanhela (at) gmail.com."]
   [ui/h2 "Social media"]
   [ui/a-some {:some-type :github :href "https://github.com/Jarzka"} "GitHub"]
   [ui/a-some {:some-type :gitlab :href "https://gitlab.com/Jarzka"} "GitLab"]
   [ui/a-some {:some-type :linkedin :href "http://lnkd.in/5JP3nQ"} "LinkedIn"]
   [ui/a-some {:some-type :twitter :href "https://twitter.com/jarzka"} "Twitter"]
   [ui/a-some {:some-type :youtube :href "https://www.youtube.com/user/VoimalaOrg"} "YouTube (JarzkaCodes)"]])