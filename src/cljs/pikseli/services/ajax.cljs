(ns pikseli.services.ajax
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn- http-get [url]
  (http/get url))

(defn GET! [url {:keys [ok error] :as options}]
  (go
    (let [{:keys [status body]} (<! (http-get url))]
      (if (= status 200)
        (ok body)
        (if error
          (error body))))))