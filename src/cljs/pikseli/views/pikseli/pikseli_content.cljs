(ns pikseli.views.pikseli.pikseli-content
  (:require
    [pikseli.views.pikseli.welcome :as welcome-view]
    [pikseli.views.pikseli.writing :as writing-view]
    [pikseli.views.pikseli.photography :as photography-view]
    [pikseli.views.pikseli.misc :as misc-view]
    [pikseli.views.pikseli.software :as software-view]
    [pikseli.views.pikseli.music :as music-view]
    [pikseli.views.pikseli.filming :as filming-view]))

(defn content []
  [:div
   [welcome-view/welcome]
   [photography-view/photography]
   [filming-view/filming]
   [writing-view/writing]
   [software-view/software]
   [music-view/music]
   [misc-view/misc]])