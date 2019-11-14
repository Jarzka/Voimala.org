(defproject Pikseli "1.0.0-SNAPSHOT"
  :description "Pikseli.org"
  :url "https://www.pikseli.org"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [reagent "0.8.1"]
                 [hiccup "1.0.5"]
                 [stylefy "1.13.3"]
                 [garden "1.3.2"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]]
  :main pikseli.core
  :aot :all
  :auto-clean false ; For uberjar
  :target-path "target/%s"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.10"]
            [lein-figwheel "0.5.18"]]
  :repl-options {:port 1339
                 :timeout 120000}
  :clean-targets #^{:protect false} ["resources/public/js"]
  :figwheel {:http-server-root "public"
             :css-dirs ["resources/public/css"]}

  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj"])
