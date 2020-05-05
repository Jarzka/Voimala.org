(ns pikseli.ui.general
  (:require [stylefy.core :as stylefy :refer [use-style]]
            [pikseli.styles.global :as g-styles]))

(defn- with-unique-keys [content]
  (map-indexed
    (fn [index element]
      ^{:key index}
      element)
    content))

(defn social-media-link [{:keys [some-type] :as options} & content]
  [:a (use-style (merge-with merge
                             g-styles/a-some
                             (g-styles/a-some-before some-type))
                 (dissoc options :some-type))
   content])

(defn button-link [{:keys [button-icon extra-styles] :as options} & content]
  [:a (use-style (merge
                   g-styles/a-button
                   extra-styles)
                 (dissoc options :button-icon :extra-styles))
   content])

(defn button [{:keys [button-icon extra-styles] :as options} & content]
  [:button (use-style (merge
                        g-styles/a-button
                        extra-styles)
                      (dissoc options :button-icon :extra-styles))
   content])

(defn blockquote [text person]
  [:blockquote
   [:p (str "\"" text "\"")
    [:br] (str "- " person)]])

(defn loader-dark []
  [:img
   (use-style {:display :block
               :width "40px"
               :margin-left :auto
               :margin-right :auto
               :margin-top "0.5rem"
               :margin-bottom "0.5rem"}
              {:src "/images/loading_dark.gif"})])

(defn loader-light [{:keys [text]}]
  [:div
   [:img (use-style {:width "32px"
                     :display :block
                     :margin-top "1rem"
                     :margin-bottom "1rem"
                     :margin-left :auto
                     :margin-right :auto}
                    {:src "/images/loading_light.gif"})]
   (when text
     [:div (use-style (merge
                        g-styles/text-center
                        g-styles/text-smaller))
      text])])