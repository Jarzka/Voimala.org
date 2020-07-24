(ns pikseli.views.blog.blog-common
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.app-link :refer [app-link]]
            [pikseli.styles.views.blog :as blog-style]
            [pikseli.ui.general :as ui]
            [pikseli.components.mail :as mail]))

(defn footer []
  (let [separator " | "]
    [:footer (use-style blog-style/footer)
     [ui/social-media-link {:some-type :instagram
                            :style {:display :inline}
                            :href "https://instagram.com/jari_hanhela"} "Instagram"]
     separator
     [:a {:href "https://pikseli.org"} "Pikseli.org"]
     separator
     [mail/mail]]))