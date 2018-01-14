# TDW File Service

This is a dockerized NodeJS fileservice. My intent is to use it as a general purpose CDN for my personal websites.

## Requirements
In order to run locally, npm 5+ is required.

Docker must be install in order to run the project properly.

## How to run
`Makefile` includes several `make` commands. In order to build the docker files, run:

`make build`

And to run the services run:

`make run`

## Seed data
There is some rudimentary seed data for MongoDB. In order to seed the data, enter the Node service container by running:

`make enter`

While inside the container, run

`node src/seed-db.js`