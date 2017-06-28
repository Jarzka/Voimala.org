(ns voimala.views.software
  (:require [reagent.core :as r]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [voimala.data.software :as software]))

(defonce selected-tab (r/atom :web))

(def tab-fmt
  {:web "Web"
  :game "Games"
  :mobile "Mobile"
  :desktop "Desktop"})

(defn- project [project]
  [:span
   [:h2 (:name project)]

   [:div.col-wrapper
    [:div.col1
     (when (:image-url project)
       [:a {:href (:image-url project) :title (:name project) :data-lightbox (:name project)}
        [:img.screenshot {:src (:image-url project) :alt ""}]])
     (when (:links project)
       [:span
        (for [link (keys (:links project))]
          (case link
            :github ^{:key link} [:a.button.button-github {:href (get-in project [:links link])} "GitHub"]
            :view ^{:key link} [:a.button.button-view {:href (get-in project [:links link])} "Live Demo"]
            :download ^{:key link} [:a.button.button-download {:href (get-in project [:links link])} "Download"]))])]

    [:div.col2
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

(defn- tab-content [selected-tab]
  [filtered-projects-by-tag selected-tab])

(defn- tab [tab-id selected-tab-atom]
  [:li [:span.link {:class (when (= @selected-tab-atom tab-id) "tabs-active-tab")
                    :on-click (fn []
                                (reset! selected-tab-atom tab-id))}
        (tab-fmt tab-id)]])

(defn navigation [selected-tab-atom]
  [:ul.tabs.software-navigation
   [tab :web selected-tab-atom]
   [tab :game selected-tab-atom]
   [tab :mobile selected-tab-atom]
   [tab :desktop selected-tab-atom]])

(defn software []
  [:div
   [:a {:name "page-top"}]

   [:blockquote
    [:p "Our civilization depends critically on software; it had better be quality software."
     [:br] "- Bjarne Stroustrup"]]

   [:div
    [navigation selected-tab]
    [tab-content @selected-tab]]])
