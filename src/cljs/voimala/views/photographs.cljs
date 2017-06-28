(ns voimala.views.photographs)

(defn photographs []
  [:div
   [:blockquote "\"A photograph has picked up a fact of life, and that fact will live forever.\""
    [:br] "- Raghu Rai\n"]

   [:p "More photos can be found from my "
    [:a {:href "http://jarzka.deviantart.com/gallery/"} "deviantART profile"] "."]

   [:h1 "Nature"]

   [:a {:href "images/carousel_photography_2.jpg", :title "Snowy Bridge", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_2.jpg", :alt ""}]]
   [:a {:href "images/carousel_photography_3.jpg", :title "Easter Bonfire", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_3.jpg", :alt ""}]]
   [:a {:href "images/carousel_photography_6.jpg", :title "Dark Sunset", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_6.jpg", :alt ""}]]
   [:a {:href "images/carousel_photography_7.jpg", :title "Käpy", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_7.jpg", :alt ""}]]

   [:div.float-fix]
   [:h1 "Animals"]

   [:a {:href "images/carousel_photography_1.jpg", :title "A Pair of Mallards", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_1.jpg", :alt ""}]]
   [:a {:href "images/carousel_photography_5.jpg", :title "Flying Seagull", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_5.jpg", :alt ""}]]
   [:a {:href "images/carousel_photography_4.jpg", :title "Flying Seagull 2", :data-lightbox "photography"}
    [:img.photography-photo {:src "images/carousel_photography_4.jpg", :alt ""}]]
   [:div.float-fix]])