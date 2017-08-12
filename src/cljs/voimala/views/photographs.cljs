(ns voimala.views.photographs
  (:require [voimala.ui.general :as ui]
            [stylefy.core :refer [use-style]]
            [voimala.styles.photographs :as photographs-style]))

(defn photographs []
  [:div
   [:blockquote "\"A photograph has picked up a fact of life, and that fact will live forever.\""
    [:br] "- Raghu Rai\n"]

   [ui/p "More photos can be found from my "
    [ui/a {:href "http://jarzka.deviantart.com/gallery/"} "deviantART profile"] "."]

   [ui/h1 "Nature"]

   [ui/a {:href "images/carousel_photography_2.jpg", :title "Snowy Bridge", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_2.jpg", :alt ""}
                 (use-style photographs-style/photo))]]
   [ui/a {:href "images/carousel_photography_3.jpg", :title "Easter Bonfire", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_3.jpg", :alt ""}
                 (use-style photographs-style/photo))]]
   [ui/a {:href "images/carousel_photography_6.jpg", :title "Dark Sunset", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_6.jpg", :alt ""}
                 (use-style photographs-style/photo))]]
   [ui/a {:href "images/carousel_photography_7.jpg", :title "Käpy", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_7.jpg", :alt ""}
                 (use-style photographs-style/photo))]]

   [ui/clearfix]
   [ui/h1 "Animals"]

   [ui/a {:href "images/carousel_photography_1.jpg", :title "A Pair of Mallards", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_1.jpg", :alt ""}
                 (use-style photographs-style/photo))]]
   [ui/a {:href "images/carousel_photography_5.jpg", :title "Flying Seagull", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_5.jpg", :alt ""}
                 (use-style photographs-style/photo))]]
   [ui/a {:href "images/carousel_photography_4.jpg", :title "Flying Seagull 2", :data-lightbox "photography"}
    [:img (merge {:src "images/carousel_photography_4.jpg", :alt ""}
                 (use-style photographs-style/photo))]]
   [ui/clearfix]])