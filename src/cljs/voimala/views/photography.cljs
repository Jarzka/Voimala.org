(ns voimala.views.photography
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [reagent.core :as r]
            [voimala.styles.views.photography :as pstyle]
            [voimala.styles.global :as s-global]
            [voimala.ui.general :as ui]
            [voimala.ui.modal :as modal]))

(defn- photo [file text webp?]
  (let [image-ready? (r/atom false)
        show-image! (fn [] (reset! image-ready? true))
        webp-url (str "images/photos/" file ".webp")
        jpeg-url (str "images/photos/" file ".jpg")]
    [:a {:href jpeg-url
         :on-click
         (fn [event]
           (.preventDefault event)
           (modal/show!
             (fn []
               [:div
                (when-not @image-ready?
                  [ui/loading-spinner])
                [:div (if @image-ready? {:display :block} {:display :none})
                 [:picture {:onLoad show-image!}
                  (when webp?
                    [:source (use-style pstyle/photo-in-modal {:type "image/webp" :alt text :srcSet webp-url})])
                  [:source (use-style pstyle/photo-in-modal {:type "image/jpeg" :alt text :srcSet jpeg-url})]
                  [:img (use-style pstyle/photo-in-modal {:alt text :src jpeg-url :onLoad show-image!})]]]
                [:footer (use-style pstyle/photo-text) text]])))}
     [:img (use-style pstyle/photo
                      {:src (str "images/photos/" file "_thumb.jpg")
                       :title text
                       :alt text})]]))

(defn photography []
  (let [show-more? (r/atom false)
        row-class "col-12 col-md-6 col-lg-4"]
    (fn []
      [:section
       [:a {:id "photography"}]
       [:h1 "Photography"]
       [ui/blockquote
        "A photograph has picked up a fact of life, and that fact will live forever."
        "Raghu Rain"]

       [:div {:class "row"}
        [:div {:class row-class}
         [photo "1" "Salamajärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "2" "Salamajärven kansallispuisto, Koirasalmen nuotiopaikka" true]]
        [:div {:class row-class}
         [photo "3" "Kolin kansallispuisto"]]
        [:div {:class row-class}
         [photo "4" "Pyhä-Luoston kansallispuisto"]]
        [:div {:class row-class}
         [photo "5" "Hillosenselkä, Orilammen Maja ja Lomakeskus"]]
        [:div {:class row-class}
         [photo "6" "Riisitunturin kansallispuisto, Posio"]]
        [:div {:class row-class}
         [photo "7" "Riisitunturin kansallispuisto, autiotupa" true]]
        [:div {:class row-class}
         [photo "8" "Riisitunturin kansallispuisto, Posio" true]]
        [:div {:class row-class}
         [photo "9" "Korouma, Posio" true]]]

       [:div (use-style (when-not @show-more? s-global/hidden)
                        {:class "row"})
        [:div {:class row-class}
         [photo "_MG_5966" "Pyhä-Luoston kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_6339-HDR" "Pyhä-Luoston kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_6087-Pano" "Pyhä-Luoston kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_6311-Pano-2" "Pyhä-Luoston kansallispuisto"]]
        [:div {:class row-class}
         [photo "winter7" "Urho Kekkosen kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_1101" "Ritajärven luonnonsuojelualue, Sastamala"]]
        [:div {:class row-class}
         [photo "IMG_7634-Pano" "Torronsuon kansallispuisto"]]
        [:div {:class row-class}
         [photo "IMG_7548-Pano" "Torronsuon kansallispuisto"]]
        [:div {:class row-class}
         [photo "IMG_7536-Pano" "Torronsuon kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_0302" "Salamajärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_0480-HDR" "Salamajärven kansallispuisto" true]]
        [:div {:class row-class}
         [photo "IMG_5582" "Metsäpolku"]]
        [:div {:class row-class}
         [photo "IMG_5516-Pano" "Pukalan virkistysmetsä"]]
        [:div {:class row-class}
         [photo "IMG_5433"]]
        [:div {:class row-class}
         [photo "_MG_6881" "Kolin kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_6977" "Pirunkirkko, Kolin kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_6766-Pano" "Repoveden kansallispuisto"]]
        [:div {:class row-class}
         [photo "IMG_5061" "Iso Helvetinjärvi, Helvetinjärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "IMG_5079" "Helvetinkolu, Helvetinjärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "IMG_5195-Pano" "Luomajärvi, Helvetinjärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_2401-HDR" "Maaliskuun Auringonlasku Vuoreksessa"]]
        [:div {:class row-class}
         [photo "IMG_4948-Pano" "Liesjärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "IMG_4720" "Iso-Melkutin, Melkuttimien reitit"]]
        [:div {:class row-class}
         [photo "animals3" "Lokki"]]
        [:div {:class row-class}
         [photo "20180107_121717" "Koitelinkoski"]]
        [:div {:class row-class}
         [photo "_MG_7194" "Virolainen, Tampere"]]
        [:div {:class row-class}
         [photo "_MG_4493" "Isojärven kansallispuisto"]]
        [:div {:class row-class}
         [photo "_MG_1702" "Ruskea virta, Korouma"]]
        [:div {:class row-class}
         [photo "_MG_1302" "Täyden kuun valossa, Sonkajärvi"]]
        [:div {:class row-class}
         [photo "_MG_0911-HDR" "Kivilinna, Sastamala"]]]

       (when-not @show-more?
         [ui/button {:on-click #(reset! show-more? true)} "Show more photos"])

       [:br]
       [:p "I mostly photograph the natural beauty of Finland. Please notice that all of my photos are copyrighted and you are not allowed to use them without permission. If you want to license my photos, please "
        [:a {:href "#contact"} "contact me"]
        [:span "."]]
       [:p "Follow me on "
        [:a {:href "https://www.instagram.com/jarzka.90"}
         "Instagram"]
        " if you want to see my new photos first."]])))
