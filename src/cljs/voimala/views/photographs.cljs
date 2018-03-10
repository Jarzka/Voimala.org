(ns voimala.views.photographs
  (:require [voimala.ui.general :as ui]
            [stylefy.core :refer [use-style]]
            [voimala.styles.photographs :as photographs-style]))

(defn- photo [file style]
  [:a (use-style style
                 {:href (str "images/photos/" file ".jpg")
                  :title "" :data-lightbox "photography"})
   [:img (use-style photographs-style/photo-img
                    {:src (str "images/photos/" file "_thumb.jpg"), :alt ""})]])

(defn photographs []
  [:div
   [:blockquote "\"A photograph has picked up a fact of life, and that fact will live forever.\""
    [:br] "- Raghu Rai\n"]

   [ui/h1 "Summer"]

   [:div (use-style photographs-style/photo-group)
    [photo "summer1" photographs-style/photo-1-2]
    [photo "summer2" photographs-style/photo-1-2]
    [photo "summer3" photographs-style/photo-full]
    [photo "summer4" photographs-style/photo-full]
    [photo "summer5" photographs-style/photo-1-2]
    [photo "summer6" photographs-style/photo-1-2]]

   [ui/h1 "Autumn"]

   [:div (use-style photographs-style/photo-group)
    [photo "autumn1" photographs-style/photo-full]]

   [ui/h1 "Winter"]

   [:div (use-style photographs-style/photo-group)
    [photo "winter1" photographs-style/photo-1-2]
    [photo "winter2" photographs-style/photo-1-2]
    [photo "winter3" photographs-style/photo-full]
    [photo "winter4" photographs-style/photo-1-3]
    [photo "winter5" photographs-style/photo-1-3]
    [photo "winter6" photographs-style/photo-1-3]
    [photo "winter7" photographs-style/photo-full]]

   [ui/h1 "Animals"]

   [:div (use-style photographs-style/photo-group)
    [photo "animals1" photographs-style/photo-1-2]
    [photo "animals2" photographs-style/photo-1-2]
    [photo "animals3" photographs-style/photo-full]]])