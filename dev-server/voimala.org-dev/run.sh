#!/usr/bin/env bash
docker build -t jarzka/voimala.org-dev .;
docker run -p 8080:80 -v ~/voimala-app:/src jarzka/voimala.org-dev;