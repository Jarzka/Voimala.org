(ns pikseli.portfolio.index
  (:require [pikseli.common.router :as router]
            [pikseli.common.page-settings :as page-settings]
            [pikseli.backend-styles :as backend-styles]
            [clojure.java.io :as io]
            [pikseli.settings :as settings]
            [stylefy.core :as stylefy :refer [use-style]]
            [markdown.core :refer [md-to-meta]]))

(defn index [{:keys [uri headers] :as request}]
  [:html {:lang "en"}
   [:head
    [:title {:id "app-title"}
     (page-settings/page-title "/")]

    [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
    [:meta {:charset "utf-8"}]

    [:meta {:name "author", :content "Jari Hanhela"}]
    [:meta {:property "og:image" :content "/images/background2.jpg"}]

    [:link {:href "/images/icon_pikseli.jpg" :rel "shortcut icon"}]
    [:link {:rel "stylesheet", :href "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", :integrity "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", :crossorigin "anonymous"}]

    [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
    [:style {:id "_stylefy-constant-styles_"}]
    [:style {:id "_stylefy-styles_"}]

    [:script {:src "https://code.jquery.com/jquery-3.3.1.slim.min.js", :integrity "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", :crossorigin "anonymous"}]
    [:script {:src "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", :integrity "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy", :crossorigin "anonymous"}]]

   [:body (use-style {:font-family "open_sans, Verdana, Helvetica, sans-serif"
                      :color "#eaeaea"
                      :background-color "black"
                      :background-image "url('/images/background2.jpg')"
                      :background-repeat "no-repeat"
                      :background-position "center"
                      :background-attachment "fixed"
                      :background-size "cover"
                      :margin 0
                      :padding 0}
                     {:class "body-loaded"})
    [:div {:id "app"}
     [:div (use-style {:background-color "rgba(0,0,0,0.5)"
                       :padding "15px"
                       :position "absolute"
                       :width "80px"
                       :top "50%"
                       :left "50%"
                       :text-align "center"
                       :transform "translateX(-50%) translateY(-100px)"})
      [:img (use-style {:width "100%"}
                       {:src "/images/loading_dark.gif"})]]]]
   [:script {:src "/js/pikseli.js"}]])