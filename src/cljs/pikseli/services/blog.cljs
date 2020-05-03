(ns pikseli.services.blog
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [pikseli.services.ajax :as ajax]
            [clojure.string :as string]))

(def loaded-posts (r/atom {}))

(defn get-post [file-name ok error]
  (ajax/GET!
    (str "blog/" file-name ".md")
    {:ok #(ok file-name %)
     :error error}))

(defn get-posts [file-names ok error]
  (doseq [file-name file-names]
    (get-post file-name ok error)))

(defn get-post-files [ok error]
  (ajax/GET!
    "blog/posts.txt"
    {:ok (fn [response]
           (let [lines (string/split-lines response)
                 lines-stored (sort lines)]
             (ok lines-stored)))
     :error error}))