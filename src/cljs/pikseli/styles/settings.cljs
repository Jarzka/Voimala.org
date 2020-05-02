(ns pikseli.styles.settings
  (:require [pikseli.services.router :as router]))

(def light-mode
  (if (router/url-is-blog? (router/read-hash))
    :light
    :dark))

(def dark-mode? (= light-mode :dark))