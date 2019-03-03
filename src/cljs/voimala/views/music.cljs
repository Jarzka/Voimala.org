(ns voimala.views.music
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]
            [voimala.styles.views.software :as pstyle]
            [voimala.styles.global :as g-styles]))

(def videos-wrapper {:display :flex
                     :align-items :center
                     :flex-direction :column})

(def iframe-wrapper {:margin-bottom "1rem"})

(defn music []
  (let [show-more? (r/atom false)]
    (fn []
      [:div
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
           :width "560"}]]]

       (when @show-more?
         [:div (use-style videos-wrapper)
          [:div (use-style iframe-wrapper)
           [:iframe
            {:allowFullScreen "allowfullscreen"
             :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             :frameBorder "0"
             :src "https://www.youtube-nocookie.com/embed/4mSYxiA6LAY"
             :height "315"
             :width "560"}]]
          [:div (use-style iframe-wrapper)
           [:iframe
            {:allowFullScreen "allowfullscreen"
             :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             :frameBorder "0"
             :src "https://www.youtube-nocookie.com/embed/BdxeatW4OcQ"
             :height "315"
             :width "560"}]]])

       (when-not @show-more?
         [ui/button {:on-click #(reset! show-more? true)} "Show more music"])])))
