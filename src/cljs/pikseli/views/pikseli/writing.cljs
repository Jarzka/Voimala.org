(ns pikseli.views.pikseli.writing
  (:require [stylefy.core :refer [use-style sub-style use-sub-style]]
            [pikseli.ui.general :as ui]
            [reagent.core :as r]
            [pikseli.styles.global :as g-styles]))

(defn writing []
  (let [show-more? (r/atom false)]
    (fn []
      [:section
       [:a {:id "writing"}]
       [:h1 "Writing"]

       [:a {:href "https://metsassa.pikseli.org"}
        [:h2 (use-style g-styles/link) "Kotona ikimetsässä"]]
       [:p "My little hiking / nature blog (in Finnish)."]

       [:a {:href "https://dev.solita.fi/"}
        [:h2 (use-style g-styles/link) "/dev/solita"]]
       [:p "Solita's software development blog. Articles written by me:"]
       [:ul
        [:li
         [:a {:href "https://dev.solita.fi/2020/08/20/react-native-experiences.html"} "20.8.2020 - Two Years With React Native: Practical Experiences On Android Development"]]
        [:li
         [:a {:href "https://dev.solita.fi/2018/02/06/unreliable-network.html"} "6.2.2018 - Quick Tips for App Developers on Surviving with Unreliable Network"]]
        [:li
         [:a {:href "https://dev.solita.fi/2017/07/14/a-tale-of-a-clojurescript-stack-components-and-domain-management.html"} "14.7.2017 - A Tale of a ClojureScript Stack: Components & Domain Management"]]

        [:span (use-style (when-not @show-more? g-styles/hidden))
         [:li
          [:a {:href "https://dev.solita.fi/2017/04/10/making-software-testing-easier-with-clojure.html"} "10.4.2017 - Making Software Testing Easier with Clojure"]]
         [:li
          [:a {:href "https://dev.solita.fi/2016/07/04/10-things-that-make-development-process-awesome.html"} "4.7.2016 - 10 Things That Make Development Process Awesome"]]
         [:li
          [:a {:href "https://dev.solita.fi/2016/02/01/testing-clojurescript-concurrency-with-servant.html"} "1.2.2016 - Testing ClojureScript Concurrency with Servant"]]
         [:li
          [:a {:href "https://dev.solita.fi/2015/08/14/solita-rooms.html"} "14.10.2015 - Making of Solita Rooms - our in-house meeting room scheduling system"]]]]
       (when-not @show-more?
         [ui/button {:on-click #(reset! show-more? true)} "Show more writings"])])))