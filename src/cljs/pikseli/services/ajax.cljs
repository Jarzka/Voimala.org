(ns pikseli.services.ajax
  (:require [cljs-http.client :as http]))

(defn http-get [{:keys [url]}]
  (http/get url))