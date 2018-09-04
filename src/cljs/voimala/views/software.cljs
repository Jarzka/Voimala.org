(ns voimala.views.software
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]
            [voimala.data.software :as software]
            [voimala.styles.global :as g-styles]))

(defn- libraries []
  [:div
   [:ul
    [:li
     [ui/link {:href "https://github.com/Jarzka/namespacefy"}
      "namespacefy"]
     [:span " "]
     "is a simple Clojure(Script) library which aims to make it easy to keep keys namespaced."]
    [:li
     [ui/link {:href "https://github.com/Jarzka/stylefy"}
      "stylefy"]
     [:span " "]
     " makes it possible to define UI component styles as Clojure data."]]])

(defn- project [project]
  [:span
   [:h2 (:name project)]

   [:div
    [:div
     (when (:image-url project)
       [ui/link {:href (:image-url project) :title (:name project) :data-lightbox (:name project)}
        [:img (use-style (sub-style software-styles/project-content-container
                                    :col1 :image)
                         {:src (:image-url project) :alt ""})]])
     (when (:links project)
       [:span
        (for [link (keys (:links project))]
          (case link
            :github
            ^{:key link}
            [ui/button-link
             {:extra-styles g-styles/inline-block
              :href (get-in project [:links link])} "View on GitHub"]

            :view
            ^{:key link}
            [ui/button-link
             {:extra-styles g-styles/inline-block
              :href (get-in project [:links link])} "Live Demo"]

            :download
            ^{:key link}
            [ui/button-link
             {:extra-styles g-styles/inline-block
              :href (get-in project [:links link])} "Download"]))])]

    [:div (use-sub-style software-styles/project-content-container :col2)
     [:span [project :description-hiccup]]
     [:span.project-small-info
      (when (:date-released project)
        (let [formatter (f/formatter "dd.MM.yyyy")]
          [:div.date-released (str "Released: " (f/unparse formatter (:date-released project)))]))
      (when (:year-released project)
        [:div.date-released (str "Released: " (:year-released project))])
      [:div.technologies-used (str "Technologies: "
                                   (clojure.string/join ", "
                                                        (mapv
                                                          (fn [technology]
                                                            (:name (first (filter
                                                                            (fn [tech]
                                                                              (= (:id tech) technology))
                                                                            software/technologies))))
                                                          (:technologies-used project))))]
      (when (:tested-browsers project)
        [:div.tested-browsers (str "Tested: "
                                   (clojure.string/join ", "
                                                        (mapv
                                                          (fn [browser]
                                                            (let [browser-info (first (filter
                                                                                        (fn [b]
                                                                                          (= (:id b) (:id browser)))
                                                                                        software/browsers))]
                                                              (str (:familiar-name browser-info) " " (:version browser))))
                                                          (:tested-browsers project))))])]]]])

(defn- filtered-projects-by-tag [tag]
  (let [filtered-projects (reverse (sort-by :importance (filter
                                                          (fn [project]
                                                            ((:tags project) tag))
                                                          software/projects)))]
    [:span
     (for [project-data filtered-projects]
       ^{:key (:name project-data)}
       [project project-data])]))

(defn software []
  [:div
   [ui/link {:name "page-top"}]

   [:blockquote
    [ui/p "Our civilization depends critically on software; it had better be quality software."
     [:br] "- Bjarne Stroustrup"]]])
