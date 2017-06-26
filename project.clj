(defproject voimala "0.1.0-SNAPSHOT"
  :description "Voimala.org Clojure Edition"
  :url "http://www.voimala.org"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.562"]
                 [reagent "0.6.2"]
                 [ring "1.6.1"]
                 [http-kit "2.2.0"]
                 [hiccup "1.0.5"]
                 [clj-time "0.13.0"]
                 [com.andrewmcveigh/cljs-time "0.5"]
                 [com.taoensso/timbre "4.10.0"]
                 [compojure "1.6.0"]]
  :main voimala.core
  :aot :all
  :auto-clean false ; For uberjar
  :target-path "target/%s"
  :plugins [[lein-haml-sass "0.2.7-SNAPSHOT"]
            [lein-cljsbuild "1.1.2"]
            [lein-ancient "0.6.10"]
            [lein-figwheel "0.5.10"]]
  :scss {:src              "dev-resources/sass"
         :output-directory "resources/public/css"
         :output-extension "css"
         :auto-compile-delay 250}
  :repl-options {:port 1339
                 :timeout 120000}
  :cljsbuild {:builds [{:id           "dev"
                        :main         'voimala.main
                        :source-paths ["src/cljs"]
                        :figwheel     {:websocket-host   "localhost"
                                       :heads-up-display false}
                        :compiler     {:output-to     "resources/public/js/dev/voimala.js"
                                       :output-dir    "resources/public/js/dev/out"
                                       :optimizations :none
                                       :pretty-print  true}}
                       {:id           "production"
                        :main         'voimala.main
                        :source-paths ["src/cljs"]
                        :compiler     {:output-to     "resources/public/js/voimala.js"
                                       :output-dir    "resources/public/js/out"
                                       :optimizations :advanced}}]}
  :clean-targets #^{:protect false} ["resources/public/js/dev/voimala.js"
                                     "resources/public/js/dev/out"
                                     "resources/public/js/voimala.js"
                                     "resources/public/js/out"]
  :figwheel {:http-server-root "public"
             :build-ids ["dev"]
             :css-dirs ["resources/public/css"]}
  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj"]

  :jvm-opts ^:replace ["-Xmx1g" "-server"]) ; To prevent out of memory errors
