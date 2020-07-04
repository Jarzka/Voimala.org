(ns pikseli.api.post-api
  (:require [clojure.java.io :as io]
            [pikseli.settings :as settings]
            [pikseli.api.markdown-parser :as markdown-parser]
            [markdown.core :refer [md-to-html-string-with-meta]]
            [clojure.string :as string]))

(defn validate-blog-post-id [id]
  (let [invalid-characters #{"." "/" "\\" " " "?" "!" "&"}
        id-ok? (not (some invalid-characters (map identity id)))]

    (when-not id-ok?
      (throw (SecurityException. "Invalid post id")))))

(defn- get-post-data [post-id]
  (validate-blog-post-id post-id)
  (let [contents (slurp (io/file
                          (str (settings/resources-on-disk)
                               "blog_posts/" post-id ".md")))
        blog-post (markdown-parser/parse-markdown contents)]
    blog-post))

(defn get-post [{:keys [path-params] :as request}]
  (let [id (:id path-params)
        blog-post (get-post-data id)]
    {:status 200
     :body blog-post}))

(defn get-post-metadata [{:keys [path-params] :as request}]
  (let [id (:id path-params)
        blog-post (get-post-data id)
        blog-post-meta (:metadata blog-post)]
    {:status 200
     :body blog-post-meta}))

(defn get-posts [_request]
  (let [contents (slurp (io/file (str (settings/resources-on-disk) "blog_posts/posts.txt")))
        lines (string/split-lines contents)
        lines-stored (vec (reverse (sort lines)))]
    {:status 200
     :body (vec lines-stored)}))