(ns pikseli.services.blog
  (:require [reagent.core :as r]))

(def loaded-posts (r/atom {}))