(ns pikseli.blog.views.about
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.common.components.app-link :refer [app-link]]
            [pikseli.common.services.dom :as dom-service]
            [pikseli.blog.styles.blog :as blog-style]
            [pikseli.common.page-settings :as page-settings]
            [pikseli.common.utils :refer [scroll-to-top]]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [pikseli.common.ui.general :as ui]))

(defn about []
  (r/create-class
    {:component-did-mount (fn []
                            (dom-service/set-title (page-settings/page-title "/blog/about")))
     :reagent-render      (fn []
                            [:div (use-style blog-style/about-page)
                             [:div (use-style blog-style/about-frame)
                              [:div (use-style blog-style/about-image-frame)
                               [:img (use-style blog-style/about-image {:src "/images/author.jpg"})]]
                              [:div (use-style blog-style/about-text)
                               [:p "Olen Jari Hanhela, reilu kolmekymppinen retkeily- ja valokuvausharrastaja Tampereelta. Luonto on minulle rauhoittumisen, hyvinvoinnin ja inspiraation lähde, ja siksi palaan sinne aina uudestaan. Liikun luonnossa ympäri vuoden päiväretkien ja lyhyiden vaellusten muodossa, ja näiltä matkoilta jää usein muistoksi kuvia jaettavaksi ja tarinoita kerrottavaksi."]
                               [:p "Haaveenani on kiertää kaikki Suomen 40 kansallispuistoa ja kirjoittaa jokaisesta pieni retkitarina. Reissu alkoi marraskuussa 2017 " [:a {:href "/blog/2017-11-17-ukk"} "Urho Kekkosen kansallispuistosta"] " ja matkalta puuttuu vielä 7 kansallispuistoa."]

                               [:img (use-style blog-style/national-parks {:src "/images/national_parks.jpg"})]]]])}))