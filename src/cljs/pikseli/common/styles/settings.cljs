(ns pikseli.common.styles.settings
  (:require [pikseli.common.services.router :as router]))

(def light-mode
  (if (router/uri-is-blog?)
    :light
    :dark))

(def dark-mode? (= light-mode :dark))