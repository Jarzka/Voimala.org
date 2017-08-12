(ns voimala.ui.general
  (:require [stylefy.core :as stylefy]
            [voimala.styles.global :as g-styles]))

(defn- with-unique-keys [content]
  (map-indexed
    (fn [index element]
      ^{:key index}
      [:span element])
    content))

(defn p [& content]
  [:p (stylefy/use-style g-styles/p)
   (with-unique-keys content)])

(defn h1 [& content]
  [:h1 (stylefy/use-style g-styles/h1)
   content])

(defn headline [& content]
  [:h1 (stylefy/use-style g-styles/headline)
   content])

(defn a [{:keys [selected?] :as options} & content]
  [:a (merge options
             (stylefy/use-style (if selected? g-styles/a-selected g-styles/a)))
   content])

(defn a-some [options & content]
  ;; TODO USE SOME STYLE
  [:a (merge options
             (stylefy/use-style g-styles/a))
   content])

(defn button [options & content]
  ;; TODO USE BUTTON STYLE
  [:a (merge options
             (stylefy/use-style g-styles/a))
   content])