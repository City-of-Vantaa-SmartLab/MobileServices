FROM node:10.10.0-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN mkdir -p /front-end
WORKDIR /front-end

COPY package.json /front-end

RUN npm install
COPY . /front-end

CMD ["npm",  "start"]