(ns voimala.views.writing)

(defn writing [req]
  [:span
   [:h1 "/dev/solita"]
   [:ul
    [:li
     [:a {:href "http://dev.solita.fi/2017/04/10/making-software-testing-easier-with-clojure.html"} "10.4.2017 - Making Software Testing Easier with Clojure"]]
    [:li
     [:a {:href "http://dev.solita.fi/2016/07/04/10-things-that-make-development-process-awesome.html"} "4.7.2016 - 10 Things That Make Development Process Awesome"]]
    [:li
     [:a {:href "http://dev.solita.fi/2016/02/01/testing-clojurescript-concurrency-with-servant.html"} "1.2.2016 - Testing ClojureScript Concurrency with Servant"]]
    [:li
     [:a {:href "http://dev.solita.fi/2015/08/14/solita-rooms.html"} "14.10.2015 - Making of Solita Rooms - our in-house meeting room scheduling system"]]]])