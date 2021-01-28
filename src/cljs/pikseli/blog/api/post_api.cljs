(ns pikseli.blog.api.post-api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [re-frame.core :as re-frame]
            [pikseli.common.services.ajax :as ajax]
            [clojure.string :as string]))

(def api-uri "/api/")
(def post-endpoint "post")
(def post-metadata-endpoint "post-metadata")
(def post-ids-endpoint "post-ids")

(defn get-post [{:keys [db]} [_ post-id ok error]]
  {:http {:url (str api-uri post-endpoint "/" post-id)
          :ok #(ok post-id %)
          :error error}})

(defn get-post-metadata [{:keys [db]} [_ post-id ok error]]
  {:http {:url (str api-uri post-metadata-endpoint "/" post-id)
          :ok #(ok post-id %)
          :error error}})

(defn get-post-ids [{:keys [db]} [_ ok error]]
  {:http {:url (str api-uri post-ids-endpoint)
          :ok ok
          :error error}})

(re-frame/reg-event-fx ::get-post-ids get-post-ids)
(re-frame/reg-event-fx ::get-post-metadata get-post-metadata)
(re-frame/reg-event-fx ::get-post get-post)