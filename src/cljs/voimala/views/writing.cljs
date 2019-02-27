(ns voimala.views.writing
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [voimala.ui.general :as ui]
            [reagent.core :as r]))

(defn writing []
  (let [show-more? (r/atom false)]
    (fn []
      [:div
       [:h1 "Writing"]
       [:h2 "/dev/solita (Solita Dev Blog)"]
       [:ul
        [:li
         [:a {:href "http://dev.solita.fi/2018/02/06/unreliable-network.html"} "6.2.2018 - Quick Tips for App Developers on Surviving with Unreliable Network"]]
        [:li
         [:a {:href "http://dev.solita.fi/2017/07/14/a-tale-of-a-clojurescript-stack-components-and-domain-management.html"} "14.7.2017 - A Tale of a ClojureScript Stack: Components & Domain Management"]]
        [:li
         [:a {:href "http://dev.solita.fi/2017/04/10/making-software-testing-easier-with-clojure.html"} "10.4.2017 - Making Software Testing Easier with Clojure"]]

        (when @show-more?
          [:span
           [:li
            [:a {:href "http://dev.solita.fi/2016/07/04/10-things-that-make-development-process-awesome.html"} "4.7.2016 - 10 Things That Make Development Process Awesome"]]
           [:li
            [:a {:href "http://dev.solita.fi/2016/02/01/testing-clojurescript-concurrency-with-servant.html"} "1.2.2016 - Testing ClojureScript Concurrency with Servant"]]
           [:li
            [:a {:href "http://dev.solita.fi/2015/08/14/solita-rooms.html"} "14.10.2015 - Making of Solita Rooms - our in-house meeting room scheduling system"]]])]
       (when-not @show-more?
         [ui/button {:on-click #(reset! show-more? true)} "Show more writings"])])))