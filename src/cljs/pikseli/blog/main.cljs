(ns pikseli.blog.main
  (:require
    [stylefy.core :as stylefy :refer [use-style prepare-style use-sub-style]]
    [re-frame.core :refer [dispatch]]
    [pikseli.blog.views.blog-content :as blog-content]
    [pikseli.blog.services.blog :as blog-service]
    [pikseli.common.components.footer :as footer]
    [pikseli.common.styles.global :as g-styles]
    [pikseli.common.styles.layout :as layout]
    [pikseli.common.ui.modal :as modal]
    [pikseli.common.re-frame :as re-frame] ; Mandatory dependency
    [reagent.dom :as reagent-dom]))

(defn- main-content []
  [:<>
   [modal/modal-lg]
   [:div (use-style (prepare-style layout/page-content))
    [:main
     [blog-content/main]]
    [footer/site-footer]]])

(defn- init []
  (g-styles/init-styles))

(defn ^:export start []
  (init)
  (dispatch [::blog-service/init])
  (reagent-dom/render main-content (.getElementById js/document "app")))
