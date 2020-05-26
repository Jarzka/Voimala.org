(ns pikseli.index
  (:require [pikseli.router :as router]
            [pikseli.page-settings :as page-settings]
            [clojure.java.io :as io]
            [pikseli.settings :as settings]
            [stylefy.core :as stylefy :refer [use-style]]
            [markdown.core :refer [md-to-meta]]))

(defn index [{:keys [uri headers] :as request}]
  (let [host (get headers "host")
        blog? (router/uri-is-blog? host uri)
        theme (if blog? :light :dark)
        blog-post-id (router/blog-post-id uri)
        blog-post (when blog-post-id
                    (slurp (io/file
                             (str (settings/resources-on-disk)
                                  "blog_posts/"
                                  blog-post-id
                                  ".md"))))
        blog-post-metadata (md-to-meta blog-post)]

    [:html
     [:head
      [:title {:id "app-title"}
       (if blog?
         (str (when blog-post-id
                (str (:title blog-post-metadata) " - "))
              (page-settings/page-title "/blog"))
         (page-settings/page-title "/"))]

      [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
      [:meta {:charset "utf-8"}]

      [:meta {:name "author", :content (if-let [author (:author blog-post-metadata)]
                                         author
                                         "Jari Hanhela")}]
      [:meta {:name "keywords" :content (:keywords blog-post-metadata)}]
      (when blog-post-id [:meta {:property "og:url", :content (str host uri)}])
      (when blog-post-id [:meta {:property "og:type", :content (if blog-post-id "article" "blog")}])
      (when blog-post-id [:meta {:property "og:title", :content (:title blog-post-metadata)}])
      #_(when blog-post-id [:meta {:property "og:description", :content ""}])
      [:meta {:property "og:image" :content (if blog-post-id
                                              (:image blog-post-metadata)
                                              "/images/background2.jpg")}]

      [:link {:href "/images/icon.jpg", :rel "shortcut icon"}]
      [:link {:rel "stylesheet", :href "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", :integrity "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", :crossorigin "anonymous"}] "<!-- Loading screen -->"

      [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
      [:style {:id "_stylefy-constant-styles_"}]
      [:style {:id "_stylefy-styles_"}]

      [:script {:src "https://code.jquery.com/jquery-3.3.1.slim.min.js", :integrity "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", :crossorigin "anonymous"}]
      [:script {:src "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", :integrity "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy", :crossorigin "anonymous"}]]

     [:body (use-style {:font-family "open_sans, Verdana, Helvetica, sans-serif"
                        :color (if (= theme :dark) "#eaeaea" "#121212")
                        :background (str (if (= theme :dark) "black" "white") " url('/images/background2.jpg')")
                        :background-repeat "no-repeat"
                        :background-position "center"
                        :background-attachment "fixed"
                        :background-size "cover"
                        :margin 0
                        :padding 0}
                       {:class :body-loaded})
      [:div {:id " app "}
       [:div (use-style {:background-color (if (= theme :dark) "rgba(0,0,0,0.5)" "rgba(255,255,255,0.5)")
                         :padding "15px"
                         :position "absolute"
                         :width "80px"
                         :top "50%"
                         :left "50%"
                         :text-align "center"
                         :transform "translateX(-50%) translateY(-100px)"})
        [:img (use-style {:width "100%"}
                         {:src (if (= theme :dark)
                                 " /images/loading_dark.gif "
                                 " /images/loading_light.gif ")})]]]]
     [:script {:src " /js/main.js "}]]))