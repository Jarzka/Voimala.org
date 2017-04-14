(ns voimala.views.software)

(defn software [req]
  [:span
   [:a {:name "page-top"}]
   [:header.page-main-header
    [:h1.headline "Software"]]
   [:blockquote
    [:p#quote]]

   [:div#software-page-content
    [:img.loading-icon {:src "images/loading.gif"}]]

   [:script {:src "js/quotes.js"}]])