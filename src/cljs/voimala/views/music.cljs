(ns voimala.views.music
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]
            [voimala.utils :as utils]
            [voimala.styles.views.software :as pstyle]
            [voimala.styles.global :as g-styles]))

(def videos-wrapper {:display :flex
                     :align-items :center
                     :flex-direction :column})

(def iframe-wrapper {:margin-bottom "1rem"})

(defn music []
  (let [show-more? (r/atom false)]
    (fn []
      (let [video-width-full 560
            video-width-mobile 320
            video-width (str (if (>= @utils/width (+ video-width-full 20))
                               video-width-full
                               video-width-mobile))]
        [:div
         [:a {:id "music"}]
         [:h1 "Music"]
         [ui/blockquote
          "Music is the shorthand of emotion."
          "Leo Tolstoy"]

         [:div (use-style videos-wrapper)
          [:div (use-style iframe-wrapper)
           [:iframe
            {:allowFullScreen "allowfullscreen"
             :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             :frameBorder "0"
             :src "https://www.youtube-nocookie.com/embed/bpmaJs93E88"
             :height "315"
             :width video-width}]]]

         [:div (use-style (merge videos-wrapper (when-not @show-more? g-styles/hidden)))
          [:div (use-style iframe-wrapper)
           [:iframe
            {:allowFullScreen "allowfullscreen"
             :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             :frameBorder "0"
             :src "https://www.youtube-nocookie.com/embed/4mSYxiA6LAY"
             :height "315"
             :width video-width}]]
          [:div (use-style iframe-wrapper)
           [:iframe
            {:allowFullScreen "allowfullscreen"
             :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             :frameBorder "0"
             :src "https://www.youtube-nocookie.com/embed/BdxeatW4OcQ"
             :height "315"
             :width video-width}]]]

         (when-not @show-more?
           [ui/button {:on-click #(reset! show-more? true)} "Show more music"])]))))
