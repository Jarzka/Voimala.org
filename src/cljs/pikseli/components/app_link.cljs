(ns pikseli.components.app-link
  (:require
    [stylefy.core :refer [use-style sub-style use-sub-style]]
    [pikseli.page-settings :as page-settings]
    [pikseli.utils :refer [scroll-to-top]]
    [pikseli.services.router :as router]))

(defn app-link [{:keys [style uri navigate-in-app?]} text]
  [:a (use-style style {:href uri
                        :on-click (fn [event]
                                    (when-not (false? navigate-in-app?)
                                      (.preventDefault event)
                                      (.stopPropagation event)
                                      (.pushState js/history
                                                  #js {}
                                                  (page-settings/page-title uri)
                                                  uri)
                                      (router/update-uri! uri)
                                      (scroll-to-top)))})
   text])