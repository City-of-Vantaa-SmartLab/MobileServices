#!/usr/bin/env bash
docker build --no-cache . -t vantaa-mobile-services:latest
docker tag vantaa-mobile-services:latest registry.heroku.com/vantaa-black-panther/web:latest
heroku container:login
docker push registry.heroku.com/vantaa-black-panther/web
heroku container:release web --app vantaa-black-panther