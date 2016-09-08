(ns voimala.views.software)

(defn software [req]
  [:span
   [:a {:name "page-top"}]
   [:header.page-main-header
    [:h1.headline "Software"]]
   [:blockquote
    [:p#quote]]

   [:div#software-page-content
    [:img.loading-icon {:src "images/loading.gif"}]]

   [:script "var quotes = [\n    '\"Controlling complexity is the essence of computer programming.\"<br>- Brian Kernigan',\n    '\"Our civilization depends critically on software; it had better be quality software.\"<br>- Bjarne Stroustrup',\n    '\"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.\" <br>- Unknown',\n    '\"The only valid measurement of code quality: wtfs/minute.\"<br>- Thom Holwerda'\n];\nvar index = 0;\n\nfunction initializeQuotes() {\n    $(\"#quote\").hide();\n    $(\"#quote\").fadeIn(500);\n    updateQuote();\n}\n\nfunction updateQuote() {\n    $(\"#quote\").get(0).innerHTML = quotes[index];\n    $(\"#quote\").fadeIn(500);\n}\n\nfunction nextQuote() {\n    index += 1;\n\n    if (index > quotes.length - 1) {\n        index = 0;\n    }\n\n    $(\"#quote\").fadeOut(500, updateQuote);\n}\n\ninitializeQuotes();\nsetInterval(nextQuote, 9000);"]])