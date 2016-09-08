(ns voimala.views.template
  (:require [voimala.settings :as settings]))

(defn template [page-name content]
  [:html
   [:head
    [:title (if page-name
              (str "Voimala.org" " - " page-name)
              "Voimala.org")]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1, maximum-scale=1"}]

    ; Links
    [:link {:href "images/icon.jpg", :rel "shortcut icon"}]
    ; FIXME Compile these to a single CSS
    [:link {:rel "stylesheet" :type "text/css" :href "css/main.css"}]
    [:link {:href "js/lightbox/css/lightbox.css", :rel "stylesheet"}]

    [:script {:src "js/jquery/jquery.js"}]
    [:script {:src "js/lightbox/js/lightbox.js"}]]
   [:body
    [:header.site-header
     [:div.logo-and-description
      [:img.logo {:alt "Voimala.org", :src "images/logo.png"}]
      [:span.site-description "Portfolio of Jari Hanhela"]]
     [:nav.site-navigation
      [:ul
       [:li
        [:a {:href "/home" :class (when (= page-name "Home") "selected")} "Home"]]
       [:li
        [:a {:href "/software" :class (when (= page-name "Software") "selected")} "Software"]]
       [:li
        [:a {:href "/photographs" :class (when (= page-name "Photographs") "selected")} "Photographs"]]
       [:li
        [:a {:href "/writing" :class (when (= page-name "Writing") "selected")} "Writing"]]
       [:li
        [:a {:href "/contact" :class (when (= page-name "Contact") "selected")} "Contact"]]]]]
    [:div.page-content
     [:main
      [:article content]]
     [:footer.site-footer
      "Copyright © Jari Hanhela 2012-"]]

    (when-not @settings/dev-mode?
      [:script {:src "js/voimala.js"}])

    (when @settings/dev-mode?
      [:script {:src "js/dev/out/goog/base.js"}])
    (when @settings/dev-mode?
      [:script {:src "js/dev/voimala.js"}])
    (when @settings/dev-mode?
      [:script "goog.require(\"voimala.main\");"])]])