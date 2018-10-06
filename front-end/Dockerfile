FROM node:10.10.0-alpine

RUN mkdir -p /front-end
WORKDIR /front-end

COPY package.json /front-end

RUN npm install git
RUN npm install
COPY . /front-end

CMD ["npm",  "start"]