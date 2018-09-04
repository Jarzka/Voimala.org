(ns voimala.ui.general
  (:require [stylefy.core :as stylefy :refer [use-style]]
            [voimala.styles.global :as g-styles]))

(defn- with-unique-keys [content]
  (map-indexed
    (fn [index element]
      ^{:key index}
      [:span element])
    content))

(defn p [& content]
  [:p (use-style g-styles/p)
   (with-unique-keys content)])

(defn h1 [& content]
  [:h1 (use-style g-styles/h1)
   content])

(defn h2 [& content]
  [:h2 (use-style g-styles/h2)
   content])

(defn link [{:keys [selected?] :as options} & content]
  [:a (use-style (if selected? g-styles/a-selected g-styles/a)
                 (dissoc options :selected?))
   (with-unique-keys content)])

(defn a-some [{:keys [some-type] :as options} & content]
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

(defn blockquote [text person]
  [:blockquote (use-style g-styles/blockquote)
   [p (str "\"" text "\"")
    [:br] (str "- " person)]])