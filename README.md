# Development

To build the project, use the following commands:

```bash
lein do clean, repl :headless :port 1338
lein scss auto
lein figwheel (or lein clsj build auto)
```

Also take a look at the dev-server folder; there is an nginx web server ready to be used in a Docker container.

Please note, that assets (images etc.) are not included in this repo,

# Deployment

The latest production version of the application is available on [Docker Hub](https://hub.docker.com/u/jarzka/). You can deploy it into your local virtual machine using the following commands:

```bash
cd deploy
vagrant up
sh deploy_vagrant.sh
```