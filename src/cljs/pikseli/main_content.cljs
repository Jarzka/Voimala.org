(ns pikseli.main-content
  (:require
    [pikseli.views.welcome :as welcome-view]
    [pikseli.views.writing :as writing-view]
    [pikseli.views.photography :as photography-view]
    [pikseli.views.misc :as misc-view]
    [pikseli.views.contact :as contact-view]
    [pikseli.views.software :as software-view]
    [pikseli.views.music :as music-view]
    [pikseli.views.filming :as filming-view]))

(defn content []
  [:div
   [welcome-view/welcome]
   [photography-view/photography]
   [filming-view/filming]
   [software-view/software]
   [writing-view/writing]
   [music-view/music]
   [misc-view/misc]
   [contact-view/contact]])