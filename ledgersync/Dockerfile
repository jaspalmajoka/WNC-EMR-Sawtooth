FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/local/app

# RUN 

COPY . /usr/src/app

EXPOSE 3002

CMD npm install && npm start