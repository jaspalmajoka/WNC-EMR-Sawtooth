FROM node:8

# WORKDIR /project/sawtooth-explorer/

CMD npm install && npm run build

RUN mkdir ../../client/dist

RUN mv dist ../../client/dist


WORKDIR /project/sawtooth-explorer

RUN npm run build

RUN mv dist ../../client/dist
