(ns pikseli.index
  (:require [pikseli.router :as router]
            [pikseli.page-settings :as page-settings]))

(defn index [{:keys [uri] :as request}]
  (let [blog? (router/uri-points-to-blog? uri)]
    [:html
     [:head
      [:title {:id "app-title"}
       (if blog?
         page-settings/blog-title
         page-settings/pikseli-title)]

      [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
      [:meta {:charset "utf-8"}]
      [:meta {:name "author", :content "Jari Hanhela"}]

      (when blog? [:meta {:property "og:url", :content "TODO"}])
      (when blog? [:meta {:property "og:type", :content "blog"}]) ; TODO POST ID?
      (when blog? [:meta {:property "og:title", :content "TODO"}])
      (when blog? [:meta {:property "og:description", :content "TODO"}])
      (when blog? [:meta {:property "twitter:title", :content "TODO"}])
      (when blog? [:meta {:property "twitter:description", :content "TODO"}])

      [:link {:href "images/icon.jpg", :rel "shortcut icon"}]
      [:link {:rel "stylesheet", :href "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", :integrity "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", :crossorigin "anonymous"}] "<!-- Loading screen -->"

      [:style ".init-body {\n            font-family: open_sans, Verdana, Helvetica, sans-serif;\n            color: #FFFFFF;\n            background: black url('images/background2.jpg');\n            background-repeat: no-repeat;\n            background-position: center;\n            background-attachment: fixed;\n            background-size: cover;\n            margin: 0;\n            padding: 0;\n        }\n\n        .init-spinner {\n            background-color: rgba(0,0,0,0.5);\n            padding: 15px;\n            position: absolute;\n            width: 80px;\n            top: 50%;\n            left: 50%;\n            text-align: center;\n            transform: translateX(-50%) translateY(-100px);\n        }"]

      [:style {:id "_stylefy-constant-styles_"}]
      [:style {:id "_stylefy-styles_"}]

      [:script {:src "https://code.jquery.com/jquery-3.3.1.slim.min.js", :integrity "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", :crossorigin "anonymous"}]
      [:script {:src "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", :integrity "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy", :crossorigin "anonymous"}]]

     [:body.init-body.body-loaded
      [:div {:id "app"}
       [:div {:class "init-spinner"}
        [:img {:style "width: 100%", :src "images/loading.gif"}]]]]
     [:script {:src "js/main.js"}]]))