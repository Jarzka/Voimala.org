(ns pikseli.utils
  (:require [reagent.core :as r]))

(def width (r/atom (.-innerWidth js/window)))

(defn listen-window-size []
  (.addEventListener js/window "resize"
                     (fn []
                       (reset! width (.-innerWidth js/window)))))

(listen-window-size)