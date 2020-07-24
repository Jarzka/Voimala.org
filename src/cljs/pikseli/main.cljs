(ns pikseli.main
  (:require
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]
    [pikseli.views.blog.blog-content :as blog-content]
    [pikseli.views.pikseli.pikseli-content :as pikseli-content]
    [pikseli.services.router :as router]
    [pikseli.styles.global :as g-styles]
    [pikseli.styles.layout :as layout]
    [pikseli.ui.modal :as modal]
    [reagent.dom :as reagent-dom]
    [pikseli.components.mail :as mail]
    [pikseli.ui.general :as ui]))

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

(defn content []
  [:div
   (if (router/uri-is-blog?)
     [blog-content/main]
     [pikseli-content/content])])

(defn- site-body []
  [:div
   [modal/modal-lg]
   [:div (use-style layout/page-content)
    [:main
     [content]]
    [site-footer]]])

(defn- main-content []
  [site-body])

(defn- init []
  (g-styles/init-styles))

(defn ^:export start []
  (init)
  (reagent-dom/render main-content (.getElementById js/document "app")))