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
    (if (not= next-index-fixed @selected-photo-index)
      (do (reset! selected-photo-index next-index-fixed)
          true)
      false)))

(defn previous-index []
  (let [next-index (dec @selected-photo-index)
        next-index-fixed (if (< next-index 0) 0 next-index)]
    (if (not= next-index-fixed @selected-photo-index)
      (do (reset! selected-photo-index next-index-fixed)
          true)
      false)))

(defn photo-in-modal []
  (let [first-image-loaded? (r/atom false)
        current-image-loaded? (r/atom false)
        show-image! (fn []
                      (reset! first-image-loaded? true)
                      (reset! current-image-loaded? true))]
    (fn []
      (let [current-index @selected-photo-index
            {:keys [file-name description formats] :as photo} (get photodata/photos current-index)
            webp? (boolean (formats photo))
            webp-url (str "images/photos/" file-name ".webp")
            jpeg-url (str "images/photos/" file-name ".jpg")]
        [:div (use-style {:position :relative})
         (when-not @current-image-loaded?
           [:div (use-style (when-not @first-image-loaded?
                              {:margin-top "4rem"}))
            [:div (use-style {:position :absolute
                              :z-index 1000
                              :top "50%"
                              :left "50%"
                              :transform "translateX(-50%) translateY(-80%)"})
             [ui/loading-spinner]]])
         [:div (use-style (if @first-image-loaded? {:display :block} {:display :none}))
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
                                      (when (previous-index)
                                        (reset! current-image-loaded? false)))}
            "<"]
           [:span (use-style {:margin-left "1rem" :margin-right "1rem"}) " "]
           [:a {:href "#" :on-click (fn [event]
                                      (.preventDefault event)
                                      (when (next-index)
                                        (reset! current-image-loaded? false)))}
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
          (take 9 photodata/photos))]

       [:div (use-style (when-not @show-more? s-global/hidden)
                        {:class "row"})
        (map-indexed
          (fn [index photo-data]
            ^{:key index}
            [:div {:class row-class}
             [photo-thumb photo-data (+ index 9)]])
          (subvec photodata/photos 9))]

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
