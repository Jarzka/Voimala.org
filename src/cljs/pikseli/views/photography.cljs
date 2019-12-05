(ns pikseli.views.photography
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [reagent.core :as r]
            [pikseli.styles.views.photography :as pstyle]
            [pikseli.styles.global :as s-global]
            [pikseli.data.photography :as photodata]
            [pikseli.ui.general :as ui]
            [pikseli.ui.modal :as modal])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def selected-photo-index (r/atom nil))

(defn next-index [index]
  (let [max-possible-index (- (count photodata/photos) 1)
        next-index (inc index)
        next-index-fixed (if (> next-index max-possible-index) max-possible-index next-index)]
    next-index-fixed))

(defn previous-index [index]
  (let [next-index (dec index)
        next-index-fixed (if (< next-index 0) 0 next-index)]
    next-index-fixed))

(defn set-next-index! []
  (let [next-index (next-index @selected-photo-index)]
    (if (not= next-index @selected-photo-index)
      (do (reset! selected-photo-index next-index)
          true)
      false)))

(defn set-previous-index! []
  (let [next-index (previous-index @selected-photo-index)]
    (if (not= next-index @selected-photo-index)
      (do (reset! selected-photo-index next-index)
          true)
      false)))

(defn- picture [{:keys [picture-attributes style image-index show-image!]}]
  (let [{:keys [file-name description formats] :as photo} (get photodata/photos image-index)
        webp-url (str "images/photos/" file-name ".webp")
        jpeg-url (str "images/photos/" file-name ".jpg")
        webp? (boolean (:webp formats))]
    [:picture picture-attributes
     (when webp?
       [:source {:type "image/webp" :alt description :srcSet webp-url}])
     [:source {:type "image/jpeg" :alt description :srcSet jpeg-url}]
     ^{:key image-index} ; Important: we want to display the buffered image, also helps Firefox to render the image correctly
     [:img (use-style style {:alt description :src jpeg-url :onLoad show-image!})]]))

(defn photo-in-modal []
  (let [first-image-loaded? (r/atom false)
        current-image-loaded? (r/atom false)
        show-image! (fn []
                      (reset! first-image-loaded? true)
                      (reset! current-image-loaded? true))]
    (fn []
      (let [previous-index-value (previous-index @selected-photo-index)
            current-index-value @selected-photo-index
            next-index-value (next-index @selected-photo-index)
            {:keys [description] :as photo} (get photodata/photos current-index-value)
            previous (fn [event]
                       (.preventDefault event)
                       (when @current-image-loaded?
                         (when (set-previous-index!)
                           (reset! current-image-loaded? false))))
            next (fn [event]
                   (.preventDefault event)
                   (when @current-image-loaded?
                     (when (set-next-index!)
                       (reset! current-image-loaded? false))))
            close (fn [event]
                    (.preventDefault event)
                    (modal/hide!))]

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
          [picture {:image-index previous-index-value
                    :style pstyle/buffer-photo}]
          [picture {:picture-attributes (use-style s-global/clickable
                                           {:onLoad show-image!
                                            :on-click next})
                    :image-index current-index-value
                    :show-image! show-image!
                    :style pstyle/photo-in-modal}]
          [picture {:image-index next-index-value
                    :style pstyle/buffer-photo}]]
         [:footer (use-style pstyle/photo-text)
          [:div (if @current-image-loaded? description "Loading...")]
          [:div
           [:a {:href "#" :on-click previous}
            "<"]
           [:span (use-style {:margin-left "1rem" :margin-right "1rem"}) " "]
           [:a {:href "#" :on-click next}
            ">"]
           [:span (use-style {:margin-left "1rem" :margin-right "1rem"}) " "]
           [:a {:href "#" :on-click close}
            "Close"]]]]))))

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
        row-class "col-12 col-md-6 col-lg-4"
        show-n-photos-by-default 9]
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
          (take show-n-photos-by-default photodata/photos))]

       [:div (use-style (when-not @show-more? s-global/hidden)
                        {:class "row"})
        (map-indexed
          (fn [index photo-data]
            ^{:key index}
            [:div {:class row-class}
             [photo-thumb photo-data (+ index show-n-photos-by-default)]])
          (subvec photodata/photos show-n-photos-by-default))]

       (when-not @show-more?
         [ui/button {:on-click #(reset! show-more? true)} "Show more photos"])

       [:br]
       [:p "I mostly photograph the natural beauty of Finland. Please notice that all my photos are copyrighted and you are not allowed to use them without permission. If you want to support my work, consider buying a print by "
        [:a {:href "#contact"} "contacting me"]
        [:span "."]]
       [:p "Follow me on "
        [:a {:href "https://www.instagram.com/jarzka.90"}
         "Instagram"]
        " if you want to see my new photos first."]])))
