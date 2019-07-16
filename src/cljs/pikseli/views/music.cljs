(ns pikseli.views.music
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.ui.general :as ui]
            [pikseli.utils :as utils]
            [pikseli.styles.layout :as layout-style]
            [pikseli.styles.global :as g-styles]))

(defn music []
  (let [show-more? (r/atom false)]
    (fn []
      [:section
       [:a {:id "music"}]
       [:h1 "Music"]
       [ui/blockquote
        "Music is the shorthand of emotion."
        "Leo Tolstoy"]

       [:div (use-style layout-style/videos-wrapper)
        [:div (use-style layout-style/iframe-wrapper)
         [:iframe
          {:allowFullScreen "allowfullscreen"
           :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           :frameBorder "0"
           :src "https://www.youtube-nocookie.com/embed/bpmaJs93E88"
           :height "315"
           :width (layout-style/video-width)}]]]

       [:div (use-style (merge layout-style/videos-wrapper (when-not @show-more? g-styles/hidden)))
        [:div (use-style layout-style/iframe-wrapper)
         [:iframe
          {:allowFullScreen "allowfullscreen"
           :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           :frameBorder "0"
           :src "https://www.youtube-nocookie.com/embed/4mSYxiA6LAY"
           :height "315"
           :width (layout-style/video-width)}]]
        [:div (use-style layout-style/iframe-wrapper)
         [:iframe
          {:allowFullScreen "allowfullscreen"
           :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           :frameBorder "0"
           :src "https://www.youtube-nocookie.com/embed/BdxeatW4OcQ"
           :height "315"
           :width (layout-style/video-width)}]]]

       (when-not @show-more?
         [ui/button {:on-click #(reset! show-more? true)} "Show more music"])])))
