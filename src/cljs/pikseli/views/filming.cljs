(ns pikseli.views.filming
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [reagent.core :as r]
            [pikseli.styles.layout :as layout-style])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn filming []
  [:section
   [:a {:id "filming"}]
   [:h1 "Filming"]
   [:p "All of these films are shot and edited by me."]
   [:h2 "Nature films"]
   [:div (use-style layout-style/videos-wrapper)
    [:div (use-style layout-style/iframe-wrapper)
     [:iframe
      {:allowFullScreen "allowfullscreen"
       :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
       :frameBorder "0"
       :src "https://www.youtube-nocookie.com/embed/bdM4cXxxZb8"
       :height "315"
       :width (layout-style/video-width)}]]]
   [:h2 "Music videos"]
   [:div (use-style layout-style/videos-wrapper)
    [:div (use-style layout-style/iframe-wrapper)
     [:iframe
      {:allowFullScreen "allowfullscreen"
       :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
       :frameBorder "0"
       :src "https://www.youtube-nocookie.com/embed/PsfjSN21RLg"
       :height "315"
       :width (layout-style/video-width)}]]]])
