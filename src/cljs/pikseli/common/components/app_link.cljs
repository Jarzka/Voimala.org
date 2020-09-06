(ns pikseli.common.components.app-link
  (:require
    [stylefy.core :refer [use-style sub-style use-sub-style]]
    [pikseli.common.page-settings :as page-settings]
    [pikseli.common.utils :refer [scroll-to-top]]
    [pikseli.common.services.router :as router]))

(defn app-link [{:keys [style uri navigate-in-app? on-click]} text]
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
                                      (scroll-to-top))
                                    (when on-click
                                      (on-click)))})
   text])