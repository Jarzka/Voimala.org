(defproject Pikseli "1.0.0-SNAPSHOT"
  :description "Pikseli.org"
  :url "https://www.pikseli.org"
  :dependencies [; Backend
                 [org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [ring "1.8.1"]
                 [http-kit "2.3.0"]
                 [compojure "1.6.1"]
                 [metosin/reitit-core "0.4.2"]
                 [metosin/reitit-ring "0.4.2"]
                 [metosin/reitit-spec "0.4.2"]
                 [markdown-clj "1.10.4"]
                 [hiccup "1.0.5"]
                 [com.cognitect/transit-clj "1.0.324"]
                 [org.jsoup/jsoup "1.7.3"]

                 ; Frontend (also defined in shadow-cljs, remove these when deps.edn is in use)
                 [reagent "0.10.0"]
                 [cljs-http "0.1.46"]
                 [hiccup "1.0.5"]
                 [stylefy "3.0.0-beta1"]
                 [stylefy/reagent "3.0.0-beta2"]
                 [garden "1.3.2"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [re-frame "1.1.2"]]
  :main pikseli.core
  :aot :all ; For uberjar
  :auto-clean false ; For uberjar
  :target-path "target/%s"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.10"]
            [lein-figwheel "0.5.18"]]
  :repl-options {:init-ns pikseli.core
                 :init (pikseli.core/-main)
                 :port 1339
                 :timeout 120000}
  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj"])
