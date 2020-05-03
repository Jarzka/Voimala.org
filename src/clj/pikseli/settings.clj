(ns pikseli.settings)

(def settings (atom nil))

(defn read-settings []
  (reset! settings
          (->> "settings.edn"
               slurp
               read-string)))