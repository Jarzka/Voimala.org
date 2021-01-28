(ns pikseli.common.re-frame
  (:require [re-frame.core :as re-frame]
            [re-frame.core :refer [subscribe]]
            [pikseli.common.services.ajax :as ajax]))

(defn listen [path]
  @(subscribe path))

(re-frame/reg-fx
  :http
  (fn [{:keys [url ok error]}]
    (ajax/GET!
      url
      {:ok    ok
       :error error})))