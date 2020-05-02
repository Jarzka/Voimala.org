(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [clojure.string :as string]))

(defn content []
  (let [post-files nil
        posts nil]
    (r/create-class
      {:component-did-mount (fn []
                              (go
                                (let [response (:body (<! (ajax/http-get "blog/posts.txt")))
                                      files (map #(string/replace % "\n" "")
                                                 response)]
                                  (reset! post-files files))))
       :render
       (fn []
         (println "POST FILES: " post-files)
         (when (nil? posts)
           [loader/loader]))})))