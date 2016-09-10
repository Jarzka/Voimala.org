# Build (dev mode)

```
lein do clean, repl :headless :port 1338
lein scss auto
lein figwheel (or lein clsj build auto)
```

# Deploy

Docker image: https://hub.docker.com/r/jarzka/voimala.org-app/

Please, do not host a clone of the site publicly anywhere. :)