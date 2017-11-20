#!/usr/bin/env sh
# run nginx with the default.conf in place to route to uwsgi.ini settings


## Start NGINX Server
nginx

## Start UWSGI Application Protocol
uwsgi --ini /app/uwsgi.ini