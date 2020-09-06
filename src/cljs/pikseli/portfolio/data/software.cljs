(ns pikseli.portfolio.data.software
  (:require [cljs-time.core :as t]
            [pikseli.common.ui.general :as ui]))


(def technologies [{:id :jquery :name "jQuery" :url nil}
                   {:id :angularjs :name "AngularJS" :url nil}
                   {:id :php :name "PHP" :url nil}
                   {:id :python :name "Python" :url nil}
                   {:id :javascript :name "JavaScript" :url nil}
                   {:id :threejs :name "ThreeJS" :url nil}
                   {:id :multimedia-fusion-2 :name "Multimedia Fusion 2" :url nil}
                   {:id :c++ :name "C++" :url nil}
                   {:id :qt :name "Qt" :url nil}
                   {:id :phpexcel :name "PHPExcel" :url nil}
                   {:id :java :name "Java" :url nil}
                   {:id :libgdx :name "libGDX" :url nil}])

(def browsers [{:id :firefox :full-name "Mozilla Firefox" :familiar-name "Firefox" :short-name "Firefox"}
               {:id :chrome :full-name "Google Chrome" :familiar-name "Chrome" :short-name "Chrome"}
               {:id :ie :full-name "Microsoft Internet Explorer" :familiar-name "Internet Explorer" :short-name "IE"}])

(def projects [{:name               "Ajokit"
                :image-url          "/images/ajokit.jpg"
                :links              {:github "https://github.com/Jarzka/Ajokit"
                                     :view   "projects/ajokit"}
                :description-hiccup [:p "A simple grid-based traffic simulation application which also has a real-time map editing capability."]
                :date-released         (t/date-time 2015 10 10)
                :technologies-used  #{:javascript :jquery :threejs}
                :tested-browsers    #{{:id      :firefox
                                       :version 41}
                                      {:id      :chrome
                                       :version 45}
                                      {:id      :ie
                                       :version 11}}
                :tags               #{:web :game}
                :importance         10}
               {:name               "JarzkaChess"
                :image-url          "/images/jarzkachess.png"
                :links              {:github "https://github.com/Jarzka/JarzkaChess"}
                :description-hiccup [:span
                                     [:p "A chess game which includes an artifical intelligence to challenge beginning chess players."]
                                     [:p [:a {:href "https://www.youtube.com/watch?v=viFZeI8uAVU"} "Watch gameplay video on YouTube"]]]
                :date-released         (t/date-time 2014 2 15)
                :technologies-used  #{:java :libgdx}
                :tags               #{:game}
                :importance         7}
               {:name               "MyRTS"
                :image-url          "/images/myrts.jpg"
                :links              {:github "https://github.com/Jarzka/MyRTS"}
                :description-hiccup [:span
                                     [:p "MyRTS is a multi player Real Time Strategy game prototype. The game is currently in very early stage but some core features have been implemented already like giving simple commands to units and synchronizing the game over network using simultaneous simulations with lockstep-like model. This kind of architectural style has been used in many classic RTS games like Age of Empires."]
                                     [:p [:a {:href "https://www.youtube.com/watch?v=OEy6PhbeE_Y"} "Watch gameplay video on YouTube"]]]
                :date-released         (t/date-time 2014 7 24)
                :technologies-used  #{:java :libgdx}
                :tags               #{:game}
                :importance         8}
               {:name               "VotingApp"
                :image-url          "/images/votingapp.jpg"
                :links              {:github "https://github.com/Jarzka/VotingApp"}
                :description-hiccup [:p "A simple Android application was created to learn the essentials of Android SDK. The app connects to the voting server, retrieves imaginary voting results and shows them in the graphical user interface. The app supports long polling using non-standard HTTP requests, which means that the app can show changes in the server-side voting information in real-time. QR code reading has also been implemented by using a 3rd party library."]
                :date-released         (t/date-time 2014 4 18)
                :technologies-used  #{:java}
                :tags               #{:mobile}
                :importance         3}
               {:name               "Multithreaded Game of Life"
                :image-url          "/images/multithreaded_game_of_life.png"
                :links              {:github "https://github.com/Jarzka/Multithreaded-Game-of-Life"}
                :description-hiccup [:span
                                     [:p "Multithreaded version of popular Game of Life simulation. The app outputs individual generations to the console window and also saves them to a gif file for visual presentation."]
                                     [:p [:a {:href "/images/game_of_life_example.gif"} "View example output GIF"]]]
                :date-released         (t/date-time 2014 4 18)
                :technologies-used  #{:java}
                :tags               #{:game}
                :importance         2}
               {:name               "PresentationApp"
                :image-url          "/images/presentation_app.png"
                :links              {:github "https://github.com/Jarzka/PresentationApp"
                                     :view "projects/presentation_app"}
                :description-hiccup [:p "A simple HTML5 application that can be used to create PowerPoint-like presentations. The app features custom themes and fades and has also built-in support for simple bar charts."]
                :date-released         (t/date-time 2014 8 25)
                :technologies-used  #{:javascript :jquery}
                :tested-browsers    #{{:id      :firefox
                                       :version 31}
                                      {:id      :chrome
                                       :version 36}
                                      {:id      :ie
                                       :version 11}}
                :tags               #{:web}
                :importance         6}
               {:name               "ThisSimpleMarquee"
                :image-url          "/images/thissimplemarquee.png"
                :links              {:github "https://github.com/Jarzka/ThisSimpleMarquee"
                                     :view "projects/thissimplemarquee/"}
                :description-hiccup [:p "A simple HTML5 marquee library. Supports 2 different fades, autoplay and is also touch-friendly."]
                :date-released         (t/date-time 2014 9 4)
                :technologies-used  #{:javascript :jquery}
                :tested-browsers    #{{:id      :firefox
                                       :version 31}
                                      {:id      :chrome
                                       :version 37}
                                      {:id      :ie
                                       :version 11}}
                :tags               #{:web}
                :importance         3}
               {:name               "Library GUI"
                :image-url          "/images/cpp_qt_kirjasto.png"
                :links              {:download "projects/kirjasto-qt-r1.zip"}
                :description-hiccup [:p "A library GUI made with Qt Framework and C++."]
                :date-released         (t/date-time 2012 10 24)
                :technologies-used  #{:c++ :qt}
                :tags               #{:desktop}
                :importance         3}
               {:name               "Trade Wars 3"
                :image-url          "/images/trade_wars_3.jpg"
                :description-hiccup [:span
                                     [:p "Trade Wars 3 is puzzle-solving game that has been inspired by the games of Lemmings franchise. The game was released in 2008."]
                                     [:p [:a {:href "http://www.youtube.com/watch?v=8R-gvi1MddY"} "Watch trailer on YouTube"]]
                                     [:p "There is an article about this game in "
                                      [:a {:href "http://games.softpedia.com/get/Freeware-Games/Trade-Wars-3.shtml"} "Softpedia"] ", "
                                      [:a {:href "http://www.novinky.cz/internet-a-pc/138621-hrajeme-zdarma-trade-wars-3-akcni-lemmings.html"} "Novinky"] " and "
                                      [:a {:href "http://plnehry.idnes.cz/trade-wars-3-lemmings-ve-vojenskem-drf-/Clanek.aspx?c=A080423_124626_bw-plneHry-logicke_bw"} "CZC"] "."]]
                :year-released         2008
                :technologies-used  #{:multimedia-fusion-2}
                :tags               #{:game}
                :importance         4}
               {:name               "Trade Wars 2"
                :image-url          "/images/tradewars2_3.jpg"
                :description-hiccup [:span
                                     [:p "A puzzle-solving game inspired by Lemmings franchise. The game was released on 3th of June, 2006."]
                                     [:p "This game was the game of the week in "
                                      [:a {:href "/images/tradewars2gotw.jpg"} "The Daily Click "] " in June 2006."]]
                :date-released         (t/date-time 2005 6 3)
                :technologies-used  #{:multimedia-fusion-2}
                :tags               #{:game}
                :importance         3}
               {:name               "Real Pilkki"
                :image-url          "/images/real_pilkki.png"
                :description-hiccup [:span
                                     [:p "Finnish ice-fishing game and a Pro Pilkki clone. The game was developed using The Games Factory."]
                                     [:p "The game was reviewed in Finnish magazine "
                                      [:a {:href "/images/real_pilkki_mbnet_2005.jpg"} "Mikrobitti"] " in 2005."]]
                :year-released         2005
                :technologies-used  #{:multimedia-fusion-2}
                :tags               #{:game}
                :importance         2}
               {:name               "Saunasata"
                :image-url          "/images/saunasata.png"
                :description-hiccup [:p "Saunasata is a sauna themed platform game, made for the Suomipelit.com Summer Contest in 2004. The game was developed using The Games Factory."]
                :year-released        2004
                :technologies-used  #{:multimedia-fusion-2}
                :tags               #{:game}
                :importance         2}
               {:name               "MertaScript"
                :links              {:github "https://github.com/Jarzka/MertaScript"}
                :description-hiccup [:span
                                     [:p "Commentator Script for CSGO. This script makes it possible to use a commentator in Counter-Strike: Global Offensive. The commentator can comment the game when something interesting happens. The script supports regular server/client model and is meant to be used in online multiplayer mode. More info and a documentation included in the readme file."]
                                     [:p "There is " [:a {:href "http://www.youtube.com/watch?v=p4RFxspj2Pk"} "a demostration video available on YouTube"] " in which the script is used with Antero Mertaranta's voice."]]
                :date-released       (t/date-time 2013 8 3)
                :technologies-used  #{:python}
                :tags               #{:game}
                :importance         1}])