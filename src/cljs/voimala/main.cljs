(ns voimala.main
  (:require
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]
    [voimala.styles.global :as g-styles]
    [voimala.styles.layout :as layout]
    [reagent.core :as r]
    [voimala.ui.general :as ui]))

(defn- site-body []
  [:div
   [:header (use-style layout/site-header)
    [:div (use-sub-style layout/site-header :logo-and-description)
     [ui/link {:href "http://www.voimala.org"}
      [:img (merge (use-sub-style layout/site-header :logo)
                   {:alt "Voimala.org" :src "images/logo.png"})]]
     [:span (use-sub-style layout/site-header :site-description)
      "Portfolio of Jari Hanhela"]]]

   [:div (use-style layout/page-content)
    [:main


     [ui/h1 "Welcome!"]
     [ui/p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
     [ui/p "The site consists of my projects of various topics (software, photography, writing etc). Feel free to explore!"]
     [ui/p "This website is powered by "
      [ui/link {:href "http://clojurescript.org"} "ClojureScript"]
      ". "
      "Source code available "
      [ui/link {:href "https://github.com/Jarzka/Voimala.org"} "here"]
      "."]

     [ui/h1 "Software"]
     [:blockquote
      [ui/p "Our civilization depends critically on software; it had better be quality software."
       [:br] "- Bjarne Stroustrup"]]

     [ui/h1 "Writing"]
     [ui/h2 "/dev/solita (Solita Developer Blog)"]
     [:ul
      [:li
       [ui/link {:href "http://dev.solita.fi/2018/02/06/unreliable-network.html"} "6.2.2018 - Quick Tips for App Developers on Surviving with Unreliable Network"]]
      [:li
       [ui/link {:href "http://dev.solita.fi/2017/07/14/a-tale-of-a-clojurescript-stack-components-and-domain-management.html"} "14.7.2017 - A Tale of a ClojureScript Stack: Components & Domain Management"]]
      [:li
       [ui/link {:href "http://dev.solita.fi/2017/04/10/making-software-testing-easier-with-clojure.html"} "10.4.2017 - Making Software Testing Easier with Clojure"]]
      [:li
       [ui/link {:href "http://dev.solita.fi/2016/07/04/10-things-that-make-development-process-awesome.html"} "4.7.2016 - 10 Things That Make Development Process Awesome"]]
      [:li
       [ui/link {:href "http://dev.solita.fi/2016/02/01/testing-clojurescript-concurrency-with-servant.html"} "1.2.2016 - Testing ClojureScript Concurrency with Servant"]]
      [:li
       [ui/link {:href "http://dev.solita.fi/2015/08/14/solita-rooms.html"} "14.10.2015 - Making of Solita Rooms - our in-house meeting room scheduling system"]]]

     [ui/h1 "Photography"]
     [:blockquote "\"A photograph has picked up a fact of life, and that fact will live forever.\""
      [:br] "- Raghu Rai\n"]

     [:p "See my photo gallery either on "
      [ui/link {:href "https://www.facebook.com/media/set/?set=a.2160608547288244.1073741832.100000173586073&type=1&l=b81257d4eb"}
       "Facebook"]
      " or "
      [ui/link {:href "https://www.dropbox.com/sh/spbl6pmblklrmsh/AAAxMrdQsZ-P9ADdSE-odjQka?dl=0"}
       "Dropbox"]
      "."]

     [ui/h1 "Misc"]
     [ui/h2 "Worms Vorg Soundbanks"]
     [ui/p "Finnish soundbanks for Worms Armageddon. This soundbank was originally created in 2009, but it has been updated since then many more times."]
     [ui/p "Download it here. See trailer here."]

     [ui/h1 "Contact"]
     [ui/h2 "Email"]
     [ui/p "You can contact me by email: jarihanhela (at) gmail.com."]
     [ui/h2 "Social media"]
     [ui/a-some {:some-type :github :href "https://github.com/Jarzka"} "GitHub"]
     [ui/a-some {:some-type :gitlab :href "https://gitlab.com/Jarzka"} "GitLab"]
     [ui/a-some {:some-type :linkedin :href "http://lnkd.in/5JP3nQ"} "LinkedIn"]
     [ui/a-some {:some-type :twitter :href "https://twitter.com/jarzka"} "Twitter"]
     [ui/a-some {:some-type :youtube :href "https://www.youtube.com/user/VoimalaOrg"} "YouTube (JarzkaCodes)"]
     ]

    [:footer (use-style layout/site-footer)
     "Copyright © Jari Hanhela 2012-"]]])

(defn- main-content []
  [site-body])

(defn- init []
  (g-styles/init-styles))

(defn ^:export start []
  (init)
  (r/render main-content (.getElementById js/document "app")))