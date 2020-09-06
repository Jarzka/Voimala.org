(ns pikseli.portfolio.views.portfolio
  (:require
    [pikseli.portfolio.views.welcome :as welcome-view]
    [pikseli.portfolio.views.writing :as writing-view]
    [pikseli.portfolio.views.photography :as photography-view]
    [pikseli.portfolio.views.misc :as misc-view]
    [pikseli.portfolio.views.software :as software-view]
    [pikseli.portfolio.views.music :as music-view]
    [pikseli.portfolio.views.filming :as filming-view]))

(defn content []
  [:div
   [welcome-view/welcome]
   [photography-view/photography]
   [filming-view/filming]
   [writing-view/writing]
   [software-view/software]
   [music-view/music]])