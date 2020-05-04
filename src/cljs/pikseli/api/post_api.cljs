(ns pikseli.api.post-api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [pikseli.services.ajax :as ajax]
            [clojure.string :as string]))

(def api-uri "api/")

(defn get-post [file-name ok error]
  (ajax/GET!
    (str api-uri "post/" file-name)
    {:ok #(ok file-name %)
     :error error}))

(defn get-posts [file-names ok error]
  (doseq [file-name file-names]
    (get-post file-name ok error)))

(defn get-post-ids [ok error]
  (ajax/GET!
    (str api-uri "post-ids/1")
    {:ok ok
     :error error}))