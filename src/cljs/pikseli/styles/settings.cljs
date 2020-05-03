(ns pikseli.styles.settings
  (:require [pikseli.services.router :as router]))

(def light-mode
  (if (router/uri-is-blog?)
    :light
    :dark))

(def dark-mode? (= light-mode :dark))