(ns voimala.views.home)

(defn home [req]
  [:span
   [:header.page-main-header
    [:h1.headline
     "Home"]]
   [:h1 "Welcome!"]
   [:p "This is a personal website / portfolio of Jari Hanhela, also known as Jarzka."]
   [:p "The main contents of this site are various software development projects I have completed mostly on my free time. I have many years of experience in programming and software development, mostly in web development (both frontend and backend) and game programming."]
   [:p "This website is powered by "
    [:a {:href "http://clojure.org"} "Clojure"] "."]])