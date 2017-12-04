# Development

To build the project, use the following commands:

```bash
lein do clean, repl :headless :port 1338
lein figwheel (or lein clsjbuild auto)
```

Start the REPL server:

```bash
(in-ns 'voimala.core)
(-main true)
```

Then take a look at the dev-server folder; there is an nginx web server ready to be used in a Docker container. Make sure you have a symbolic link /home/yourusername/voimala-app pointing to the project directory. Run Dockerfile and point your browser to localhost:8080.

Please note, that assets (images etc.) are not included in this repo.
,
# Deployment

The latest production version of the application is available on [Docker Hub](https://hub.docker.com/u/jarzka/). You can deploy it into your local virtual machine using the following commands:

```bash
cd deploy
vagrant up
sh deploy_vagrant.sh
```
