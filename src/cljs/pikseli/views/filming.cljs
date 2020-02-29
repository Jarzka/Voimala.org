(ns pikseli.views.filming
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [reagent.core :as r]
            [pikseli.styles.layout :as layout-style])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn youtube-video [id]
  [:iframe
   {:allowFullScreen "allowfullscreen"
    :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    :frameBorder "0"
    :src (str "https://www.youtube-nocookie.com/embed/" id)
    :height "315"
    :width (layout-style/video-width)}])

(defn filming []
  [:section
   [:a {:id "filming"}]
   [:h1 "Filming"]
   [:p "All of these films are shot and edited by me."]
   [:h2 "Nature films"]
   [:div (use-style layout-style/videos-wrapper)
    [:div (use-style layout-style/iframe-wrapper)
     [youtube-video "bdM4cXxxZb8"]
     [youtube-video "fepNAB3N3Oc"]]]
   [:h2 "Music videos"]
   [:div (use-style layout-style/videos-wrapper)
    [:div (use-style layout-style/iframe-wrapper)
     [youtube-video "PsfjSN21RLg"]]]])
