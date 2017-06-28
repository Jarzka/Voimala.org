(ns voimala.router-utils)

(def pages #{:home :software :writing :photographs :contact})

(def fmt-page
  {:home "Home"
   :software "Software"
   :writing "Writing"
   :photographs "Photographs"
   :contact "Contact"})

(defn match-page-from-path [path]
  (first (filter
           (fn [page-key]
             (= (str "/" (name page-key))
                path))
           pages)))