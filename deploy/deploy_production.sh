#!/bin/sh

ansible-playbook deploy.yml --extra-vars "target=production"
