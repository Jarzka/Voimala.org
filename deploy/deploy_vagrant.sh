#!/bin/sh

# Deploy the production version of the app into the VM
ansible-playbook deploy.yml --extra-vars "target=test"
