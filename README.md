# Development

You need assets (images and other files that are not included in this repo) to be comfortable developing this site.

To build the project, use the following commands:

```bash
lein do clean, repl :headless :port 1338
lein scss auto
lein figwheel (or lein clsj build auto)
```

# Deployment

The latest production version of the application is available on [Docker Hub](https://hub.docker.com/u/jarzka/). You can deploy it into your local virtual machine using the following commands:

```bash
cd deploy
vagrant up
sh deploy_vagrant.sh
```