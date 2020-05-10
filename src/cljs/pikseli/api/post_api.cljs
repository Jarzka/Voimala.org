(ns pikseli.api.post-api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [pikseli.services.ajax :as ajax]
            [clojure.string :as string]))

(def api-uri "/api/")
(def post-endpoint "post")
(def post-ids-endpoint "post-ids")

(defn get-post [post-id ok error]
  (ajax/GET!
    (str api-uri post-endpoint "/" post-id)
    {:ok #(ok post-id %)
     :error error}))

(defn get-post-ids [ok error]
  (ajax/GET!
    (str api-uri post-ids-endpoint)
    {:ok ok
     :error error}))