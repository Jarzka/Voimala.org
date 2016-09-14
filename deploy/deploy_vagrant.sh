#!/bin/sh

ansible-playbook deploy.yml --extra-vars "target=test"