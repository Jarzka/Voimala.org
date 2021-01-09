(ns pikseli.common.styles.settings
  (:require [pikseli.common.services.router :as router]))

(def theme
  (if (router/uri-is-blog?)
    :light
    :dark))

(def theme-dark? (= theme :dark))