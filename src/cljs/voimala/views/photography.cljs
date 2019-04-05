(ns voimala.views.photography
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [reagent.core :as r]
            [voimala.styles.views.photography :as pstyle]
            [voimala.styles.global :as s-global]
            [voimala.data.photography :as photodata]
            [voimala.ui.general :as ui]
            [voimala.ui.modal :as modal])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def selected-photo-index (r/atom nil))

(defn next-index []
  (let [max-possible-index (- (count photodata/photos) 1)
        next-index (inc @selected-photo-index)
        next-index-fixed (if (> next-index max-possible-index) max-possible-index next-index)]
    (reset! selected-photo-index next-index-fixed)))

(defn previous-index []
  (let [next-index (dec @selected-photo-index)
        next-index-fixed (if (< next-index 0) 0 next-index)]
    (reset! selected-photo-index next-index-fixed)))

(defn photo-in-modal []
  (let [image-loaded? (r/atom false)
        show-image! (fn [] (reset! image-loaded? true))]
    (fn []
      (let [current-index @selected-photo-index
            {:keys [file-name description formats] :as photo} (get photodata/photos current-index)
            webp? (boolean (formats photo))
            webp-url (str "images/photos/" file-name ".webp")
            jpeg-url (str "images/photos/" file-name ".jpg")]
        [:div
        (when-not @image-loaded?
          [ui/loading-spinner])
        [:div (use-style (if @image-loaded? {:display :block} {:display :none}))
         [:picture {:onLoad show-image!}
          (when webp?
            [:source (use-style pstyle/photo-in-modal {:type "image/webp" :alt description :srcSet webp-url})])
          [:source (use-style pstyle/photo-in-modal {:type "image/jpeg" :alt description :srcSet jpeg-url})]
          [:img (use-style pstyle/photo-in-modal {:alt description :src jpeg-url :onLoad show-image!})]]]
        [:footer (use-style pstyle/photo-text)
         [:div description]
         [:div
          [:a {:href "#" :on-click (fn [event]
                                     (.preventDefault event)
                                     (previous-index))}
           "<"]
          [:span (use-style {:margin-left "1rem" :margin-right "1rem"}) " "]
          [:a {:href "#" :on-click (fn [event]
                                     (.preventDefault event)
                                     (next-index))}
           ">"]]]]))))

(defn view-photo-in-modal [index]
  (modal/hide!)
  (go
    (reset! selected-photo-index index)
    (modal/show-contents! photo-in-modal)))

(defn- photo-thumb [{:keys [file-name description formats] :as photo} index]
  (let [jpeg-url (str "images/photos/" file-name ".jpg")]
    [:a {:href jpeg-url ; For SEO
         :on-click (fn [event]
                     (.preventDefault event)
                     (view-photo-in-modal index))}
     [:img (use-style pstyle/photo
                      {:src (str "images/photos/" file-name "_thumb.jpg")
                       :title description
                       :alt description})]]))

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
        (map-indexed
          (fn [index photo-data]
            ^{:key index}
            [:div {:class row-class}
             [photo-thumb photo-data index]])
          photodata/photos)]

       #_[:div (use-style (when-not @show-more? s-global/hidden)
                          {:class "row"})
          [:div {:class row-class}
           [photo-thumb "_MG_5966" "Pyhä-Luoston kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_6339-HDR" "Pyhä-Luoston kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_6087-Pano" "Pyhä-Luoston kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_6311-Pano-2" "Pyhä-Luoston kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "winter7" "Urho Kekkosen kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_1101" "Ritajärven luonnonsuojelualue, Sastamala"]]
          [:div {:class row-class}
           [photo-thumb "IMG_7634-Pano" "Torronsuon kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "IMG_7548-Pano" "Torronsuon kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "IMG_7536-Pano" "Torronsuon kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_0302" "Salamajärven kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_0480-HDR" "Salamajärven kansallispuisto" true]]
          [:div {:class row-class}
           [photo-thumb "IMG_5582" "Metsäpolku"]]
          [:div {:class row-class}
           [photo-thumb "IMG_5516-Pano" "Pukalan virkistysmetsä"]]
          [:div {:class row-class}
           [photo-thumb "IMG_5433"]]
          [:div {:class row-class}
           [photo-thumb "_MG_6881" "Kolin kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_6977" "Pirunkirkko, Kolin kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_6766-Pano" "Repoveden kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "IMG_5061" "Iso Helvetinjärvi, Helvetinjärven kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "IMG_5079" "Helvetinkolu, Helvetinjärven kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "IMG_5195-Pano" "Luomajärvi, Helvetinjärven kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_2401-HDR" "Maaliskuun Auringonlasku Vuoreksessa"]]
          [:div {:class row-class}
           [photo-thumb "IMG_4948-Pano" "Liesjärven kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "IMG_4720" "Iso-Melkutin, Melkuttimien reitit"]]
          [:div {:class row-class}
           [photo-thumb "animals3" "Lokki"]]
          [:div {:class row-class}
           [photo-thumb "20180107_121717" "Koitelinkoski"]]
          [:div {:class row-class}
           [photo-thumb "_MG_7194" "Virolainen, Tampere"]]
          [:div {:class row-class}
           [photo-thumb "_MG_4493" "Isojärven kansallispuisto"]]
          [:div {:class row-class}
           [photo-thumb "_MG_1702" "Ruskea virta, Korouma"]]
          [:div {:class row-class}
           [photo-thumb "_MG_1302" "Täyden kuun valossa, Sonkajärvi"]]
          [:div {:class row-class}
           [photo-thumb "_MG_0911-HDR" "Kivilinna, Sastamala"]]]

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
