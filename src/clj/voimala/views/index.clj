(ns voimala.views.index
  (:require [voimala.settings :as settings]
            [voimala.router-utils :as router-utils]))

(defn index [req]
  [:html
   [:head
    [:title#app-title (str "Voimala.org" (when-let [page-name (router-utils/fmt-page
                                                                (router-utils/match-page-from-path
                                                                  (:uri req)))]
                                           (str " - " page-name)))]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1, maximum-scale=1"}]
    [:meta {:charset "utf-8"}]

    ; Links
    [:link {:href "images/icon.jpg", :rel "shortcut icon"}]
    [:link {:rel "stylesheet" :type "text/css" :href "css/main.css"}]
    [:link {:href "js/lightbox/css/lightbox.css", :rel "stylesheet"}]

    [:script {:src "js/jquery/jquery.js"}]
    [:script {:src "js/lightbox/js/lightbox.js"}]]
   [:body {:onload "voimala.main.start();"}
    [:div#app
     [:div {:style "background-color: rgba(0,0,0,0.5);
                    padding: 10px;
                    width: 100px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-100px);"}
      [:img.loading-icon {:src "images/loading.gif"}]
      [:p {:style "text-align: center"}
       "Loading..."]]]

    (when-not @settings/dev-mode?
      [:script {:src "js/voimala.js"}])

    (when @settings/dev-mode?
      [:script {:src "js/dev/out/goog/base.js"}])
    (when @settings/dev-mode?
      [:script {:src "js/dev/voimala.js"}])
    (when @settings/dev-mode?
      [:script "goog.require(\"voimala.main\");"])]])