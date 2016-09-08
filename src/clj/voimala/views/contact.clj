(ns voimala.views.contact)

(defn contact [req]
  [:span
   [:header.page-main-header
    [:h1.headline "Contact"]]
   [:h1 "Contact info"]
   [:p "You can contact me by email: jarihanhela (at) gmail.com."]
   [:h1 "Social media"]
   [:a.some.some-github {:href "https://github.com/Jarzka"} "Github"]
   [:a.some.some-linkedin {:href "http://lnkd.in/5JP3nQ"} "LinkedIn"]
   [:a.some.some-twitter {:href "https://twitter.com/jarzka"} "Twitter"]
   [:a.some.some-youtube {:href "https://www.youtube.com/user/VoimalaOrg"} "YouTube (JarzkaCodes)"]])