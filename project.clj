(defproject Pikseli "1.0.0-SNAPSHOT"
  :description "Pikseli.org"
  :url "https://www.pikseli.org"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [ring "1.8.1"]
                 [http-kit "2.3.0"]
                 [compojure "1.6.1"]
                 [markdown-clj "1.10.4"]
                 [hiccup "1.0.5"]]
  :main pikseli.core
  :aot :all
  :auto-clean false ; For uberjar
  :target-path "target/%s"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.10"]
            [lein-figwheel "0.5.18"]]
  :repl-options {:init-ns pikseli.core
                 :init (pikseli.core/-main)
                 :port 1339
                 :timeout 120000}
  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/cljs"]
                        :figwheel     {:on-jsload "pikseli.main/start"
                                       :websocket-host   "localhost"
                                       :heads-up-display false}
                        :compiler     {:output-to     "resources/public/js/dev/pikseli.js"
                                       :output-dir    "resources/public/js/dev/out"
                                       :optimizations :none
                                       :pretty-print  true}}
                       {:id           "production"
                        :source-paths ["src/cljs"]
                        :compiler     {:output-to     "resources/public/js/pikseli.js"
                                       :output-dir    "resources/public/js/out"
                                       :optimizations :advanced}}]}
  :clean-targets #^{:protect false} ["resources/public/js/dev/pikseli.js"
                                     "resources/public/js/dev/out"
                                     "resources/public/js/pikseli.js"
                                     "resources/public/js/out"]
  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj"])
