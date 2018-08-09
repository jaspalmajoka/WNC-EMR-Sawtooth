FROM ubuntu:xenial

ARG DEBIAN_FRONTEND=noninteractive

RUN echo "deb http://repo.sawtooth.me/ubuntu/ci xenial universe" >> /etc/apt/sources.list \
    && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD \
    && echo "deb http://repo.sawtooth.me/ubuntu/1.0/stable xenial universe" >> /etc/apt/sources.list \
    && apt-get update \
    && apt-get install -y -q --no-install-recommends \
    apt-utils \
    && apt-get install -y -q \
    ca-certificates \
    build-essential \
    python3-sawtooth-cli \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs

WORKDIR /project/sawtooth-explorer/

RUN rm -rf node_modules

RUN npm install && npm run build

WORKDIR /project/client/

RUN rm -rf node_modules

EXPOSE 3000

CMD npm install && npm start

