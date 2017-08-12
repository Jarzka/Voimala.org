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

(defn headline [& content]
  [:h1 (use-style g-styles/page-headline)
   content])

(defn a [{:keys [selected?] :as options} & content]
  [:a (merge (dissoc options :selected?)
             (use-style (if selected? g-styles/a-selected g-styles/a)))
   (with-unique-keys content)])

(defn a-some [some-type & content]
  [:a (use-style (merge-with merge
                             g-styles/a-some
                             (g-styles/a-some-before some-type)))
   (.log js/console "--> " (pr-str (merge-with merge
                                               g-styles/a-some
                                               (g-styles/a-some-before some-type))))
   (rest content)])

(defn button-link [type & content]
  ;; TODO USE BUTTON STYLE
  [:a (use-style g-styles/a)
   content])

(defn clearfix []
  [:div (use-style g-styles/clearfix)])