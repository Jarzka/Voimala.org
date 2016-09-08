# Build (dev mode)

lein do clean, repl :headless :port 1338
lein scss auto
lein figwheel (or lein clsj build auto)