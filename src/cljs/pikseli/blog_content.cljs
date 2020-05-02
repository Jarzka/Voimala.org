(ns pikseli.blog-content
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [pikseli.components.loader :as loader]
            [pikseli.services.ajax :as ajax]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [clojure.string :as string]))

(defn content []
  (let [post-files (r/atom nil)
        posts (r/atom nil)]
    (r/create-class
      {:component-did-mount (fn []
                              (ajax/GET!
                                "blog/posts.txt"
                                {:ok (fn [response]
                                       (let [lines (string/split-lines response)]
                                         (reset! post-files lines)))}))
       :render
       (fn []
         (when (nil? posts)
           [loader/loader]))})))