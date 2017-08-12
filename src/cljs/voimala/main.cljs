(ns voimala.main
  (:require
    [stylefy.core :as stylefy]
    [voimala.views.home :as home]
    [voimala.views.software :as software]
    [voimala.views.writing :as writing]
    [voimala.views.photographs :as photographs]
    [voimala.views.contact :as contact]
    [voimala.styles.global :as g-styles]
    [voimala.router :as router]
    [reagent.core :as r]
    [voimala.ui.general :as ui]
    [voimala.router-utils :as router-utils]))

(defn page [current-page]
  [:article
   (case current-page
     :home [home/home]
     :software [software/software]
     :writing [writing/writing]
     :photographs [photographs/photographs]
     :contact [contact/contact])])

(defn nav-link [page-id current-page href]
  [:li
   [:a {:href href :class (when (= current-page page-id) "selected")
        :on-click #(do (.preventDefault %)
                       (router/change-page! page-id))}
    (router-utils/fmt-page page-id)]])

(defn- site-body []
  (let [current-page @router/current-page]
    [:div (stylefy/use-style g-styles/root)
     [:header.site-header
      [:div.logo-and-description
       [:img.logo {:alt "Voimala.org", :src "images/logo.png"}]
       [:span.site-description "Portfolio of Jari Hanhela"]]
      [:nav.site-navigation
       [:ul
        [nav-link :home current-page "/home"]
        [nav-link :software current-page "/software"]
        [nav-link :photographs current-page "/photographs"]
        [nav-link :writing current-page "/writing"]
        [nav-link :contact current-page "/contact"]]]]

     [:div.page-content
      [:main
       [:header.page-main-header
        [ui/headline (router-utils/fmt-page current-page)]]
       [page current-page]]
      [:footer.site-footer
       "Copyright © Jari Hanhela 2012-"]]]))

(defn- main-content []
  [site-body])

(defn- init []
  (router/read-page-from-uri!)
  (router/listen-state-changes!)
  (g-styles/init-styles))

(defn ^:export start []
  (init)
  (r/render main-content (.getElementById js/document "app")))