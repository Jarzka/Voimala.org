(ns voimala.views.index
  (:require [voimala.settings :as settings]
            [voimala.styles.shared :as shared-styles]
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
    [:link {:href "js/lightbox/css/lightbox.css", :rel "stylesheet"}]

    [:style {:id "_stylefy-constant-styles_"}]
    [:style {:id "_stylefy-styles_"}]
    [:script {:src "js/jquery/jquery.js"}]
    [:script {:src "js/lightbox/js/lightbox.js"}]]
   [:body {:onload "voimala.main.start();"
           :style (str "font-family: open_sans, Verdana, Helvetica, sans-serif;
                   color: " (:text shared-styles/colors) ";"
                   "background-color: black;
                   background: url(\"../images/background.jpg \");
                   background-repeat: no-repeat;
                   background-position: center;
                   background-attachment: fixed;
                   background-size: cover;
                   margin: 0;
                   padding: 0;")}
    [:div#app
     [:div {:style "background-color: rgba(0,0,0,0.5);
                    padding: 10px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    text-align: center;
                    transform: translateX(-50%) translateY(-100px);"}
      [:img {:src "images/loading.gif"}]
      [:p "Loading"]]]

    (when-not @settings/dev-mode?
      [:script {:src "js/voimala.js"}])

    (when @settings/dev-mode?
      [:script {:src "js/dev/out/goog/base.js"}])
    (when @settings/dev-mode?
      [:script {:src "js/dev/voimala.js"}])
    (when @settings/dev-mode?
      [:script "goog.require(\"voimala.main\");"])]])