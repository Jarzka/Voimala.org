(ns pikseli.common.services.ajax
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]))

(defn- http-get [url]
  (http/get url))

(defn GET! [url {:keys [ok error] :as options}]
  (go
    (let [{:keys [status body] :as response} (<! (http-get url))]
      (if (= status 200)
        (ok body)
        (when error (error body))))))