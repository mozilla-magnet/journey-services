# Contributing quick start

This guide will help you get started contributing.  If you have any questions,
feel free to ask in the #magnet IRC channel on irc.mozilla.org.

## Getting started

You'll need [Node.JS installed](https://nodejs.org/en/download/), this comes
with the Node package manager, `npm`.

An install of `docker` and `docker-compose`, the instructions found on Docker's
[documentation site here](https://docs.docker.com/compose/install/), can cover
both of these installations.

From the command line, clone the repository and change to the newly create directory:

```
$ git clone https://github.com/mozilla-magnet/journey-services
$ cd journey-services
```

Install dependencies using `npm` (you can optionally, use `yarn`).

```
$ npm install
```

## Launching the service locally

To begin with, start a local database, this is made easier through
`docker-compose`. The following command starts the database and detaches the
output of the container from your terminal sending it to the background (`-d`
flag).

```
$ docker-compose -f docker-compose-dev.yml db -d up
```

The `docker-compose-dev.yml` config, describes a `db` service that exposes the
default postgres port number (5432) on your `localhost` interface. It also maps the data
volume inside the container to the `$CWD/data` directory.

Starting the container may take a moment, verify the postgres server is running
and has configured a `content-service` database:

```
$ psql --host=localhost -U postgres --list
```

At this point, the service should be ready to run, set the `$DATABASE`
environment variable to your running database, and start the service.

```
$ export DATABASE=postgresql://postgres:postgres@localhost/content-service
$ npm start
```

## Testing the service locally

`TODO`
