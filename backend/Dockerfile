FROM node:10.10.0-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend

RUN npm install
COPY . /backend

CMD ["npm", "run", "start:dev"]
