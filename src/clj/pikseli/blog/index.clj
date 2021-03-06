(ns pikseli.blog.index
  (:require [pikseli.common.router :as router]
            [pikseli.common.page-settings :as page-settings]
            [clojure.java.io :as io]
            [pikseli.settings :as settings]
            [stylefy.core :as stylefy :refer [use-style]]
            [markdown.core :refer [md-to-meta]]))

(defn index [{:keys [uri headers] :as request}]
  (let [host (get headers "host")
        blog-post-id (router/blog-post-id uri)
        blog-post (when blog-post-id
                    (slurp (io/file
                             (str (settings/resources-on-disk)
                                  "blog_posts/"
                                  blog-post-id
                                  ".md"))))
        blog-post-metadata (md-to-meta blog-post)]

    [:html {:lang "fi"}
     [:head
      [:title {:id "app-title"}
       (str (when blog-post-id
              (str (:title blog-post-metadata) " - "))
            (page-settings/page-title "/blog"))]

      [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1", :name "viewport"}]
      [:meta {:charset "utf-8"}]

      [:meta {:name "author", :content (:author blog-post-metadata)}]
      [:meta {:name "keywords" :content (:keywords blog-post-metadata)}]
      (when blog-post-id [:meta {:property "og:url", :content (str host uri)}])
      (when blog-post-id [:meta {:property "og:type", :content (if blog-post-id "article" "blog")}])
      (when blog-post-id [:meta {:property "og:title", :content (:title blog-post-metadata)}])
      #_(when blog-post-id [:meta {:property "og:description", :content ""}])
      [:meta {:property "og:image" :content (if blog-post-id
                                              (:image blog-post-metadata)
                                              "/images/background2.jpg")}]

      [:link {:href "/images/icon_blog.jpg" :rel "shortcut icon"}]
      [:link {:rel "stylesheet", :href "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", :integrity "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", :crossorigin "anonymous"}]

      [:style {:id "_stylefy-server-styles_"} "_stylefy-server-styles-content_"]
      [:style {:id "_stylefy-constant-styles_"}]
      [:style {:id "_stylefy-styles_"}]

      [:script {:src "https://code.jquery.com/jquery-3.3.1.slim.min.js", :integrity "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", :crossorigin "anonymous"}]
      [:script {:src "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", :integrity "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy", :crossorigin "anonymous"}]]

     [:body (use-style {:font-family "open_sans, Verdana, Helvetica, sans-serif"
                        :color "#121212"
                        :background-color "white"
                        :background-image "url('/images/background2.jpg')"
                        :background-repeat "no-repeat"
                        :background-position "center"
                        :background-attachment "fixed"
                        :background-size "cover"
                        :margin 0
                        :padding 0}
                       {:class "body-loaded"})
      [:div {:id "app"}
       [:div (use-style {:background-color "rgba(255,255,255,0.5)"
                         :padding "15px"
                         :position "absolute"
                         :width "80px"
                         :top "50%"
                         :left "50%"
                         :text-align "center"
                         :transform "translateX(-50%) translateY(-100px)"})
        [:img (use-style {:width "100%"}
                         {:src "/images/loading_light.gif"})]]]]
     [:script {:src "/js/metsa.js"}]]))