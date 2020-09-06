(ns pikseli.common.components.footer
  (:require [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [pikseli.common.styles.layout :as layout]
            [pikseli.common.ui.general :as ui]
            [pikseli.common.components.mail :as mail]))

(defn- site-footer []
  (let [separator " | "]
    [:<>
     [:footer (use-style layout/site-footer)
      [ui/social-media-link {:some-type :instagram :href "https://instagram.com/jari_hanhela"} "Instagram"]
      [ui/social-media-link {:some-type :twitter :href "https://twitter.com/jarzka"} "Twitter"]
      [ui/social-media-link {:some-type :github :href "https://github.com/Jarzka"} "GitHub"]
      separator
      [:a {:href "https://pikseli.org"} "Pikseli.org"]
      separator
      [mail/mail]]
     [:div (use-style layout/copyright) "Copyright © Jari Hanhela"]]))