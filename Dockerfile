FROM node:10.10.0-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
WORKDIR /backend
ADD ./backend /backend
RUN npm install

ADD ./front-end /front-end
WORKDIR /front-end
RUN npm install
RUN npm run build

RUN cp -r ./build ../backend/public

WORKDIR /backend
EXPOSE 3000

CMD ["npm", "start"]