(ns pikseli.views.blog.about
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.components.app-link :refer [app-link]]
            [pikseli.services.dom :as dom-service]
            [pikseli.styles.views.blog :as blog-style]
            [pikseli.page-settings :as page-settings]
            [pikseli.utils :refer [scroll-to-top]]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]))

(defn about []
  (r/create-class
    {:component-did-mount (fn []
                            (dom-service/set-title (page-settings/page-title "/blog/about")))
     :reagent-render (fn []
                       [:div (use-style blog-style/about-page)
                        [:div (use-style blog-style/about-frame)
                         [:div (use-style blog-style/about-image-frame)
                          [:img (use-style blog-style/about-image {:src "/images/author.jpg"})]]
                         [:div (use-style blog-style/about-text)
                          [:p "Olen Jari Hanhela, 30-vuotias retkeily- ja valokuvausharrastaja Tampereelta. Tässä blogissa jaan luontoretkilläni syntyneitä kuvia ja ajatuksia. Luonto on minulle rauhoittumisen, hyvinvoinnin ja inspiraation lähde, ja siksi palaan sinne aina uudestaan."]
                          [:p "Haaveenani on kiertää kaikki Suomen 40 kansallispuistoa ja kirjoittaa jokaisesta pieni retkitarina. Reissu alkoi " [:a {:href "/blog/2017-11-17-ukk"} "Urho Kekkosen kansallispuistosta marraskuussa 2017"] " ja matkalta puuttuu enää 10 kansallispuistoa."]
                          [:p "Löydät minut myös täältä:"]
                          [:p "- Instagram: " [:a {:href "https://instagram.com/jari_hanhela"} "jari_hanhela"]
                           [:br] "- Portfolio: " [:a {:href "https://pikseli.org"} "Pikseli.org"]]
                          [:p "Palaute: jarihanhela (at) gmail.com"]]]])}))