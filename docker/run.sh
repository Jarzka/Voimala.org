#!/usr/bin/env bash
docker build -t jarzka/pikseli-dev .;
docker run -p 8081:80 -v ../resources/public/:/var/www/pikseli/ jarzka/pikseli-dev;