(ns voimala.views.photography
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.styles.views.photography :as pstyle]
            [voimala.ui.general :as ui]))

(defn- photo [file]
  [:a {:href (str "images/photos/" file ".jpg")
       :title "" :data-lightbox "photography"}
   [:img (use-style pstyle/photo
                    {:src (str "images/photos/" file "_thumb.jpg")
                     :alt ""})]])

(defn photography []
  [:div
   [ui/h1 "Photography"]
   [ui/blockquote
    "A photograph has picked up a fact of life, and that fact will live forever."
    "Raghu Rain"]

   [:p "See my full photo gallery either on "
    [ui/link {:href "https://www.facebook.com/media/set/?set=a.2160608547288244.1073741832.100000173586073&type=1&l=b81257d4eb"}
     "Facebook"]
    " or "
    [ui/link {:href "https://www.dropbox.com/sh/spbl6pmblklrmsh/AAAxMrdQsZ-P9ADdSE-odjQka?dl=0"}
     "Dropbox"]
    ". Some of my new photos are also uploaded to "
    [ui/link {:href "https://www.instagram.com/jarzka.90"}
     "Instagram"]
    "."]

   [:div {:class "row"}
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "1"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "2"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "3"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "4"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "5"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "6"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "7"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "8"]]
    [:div {:class "col-12 col-md-6 col-lg-4"}
     [photo "9"]]]])