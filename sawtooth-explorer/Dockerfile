FROM node:8

RUN \
 if [ ! -z $HTTP_PROXY ] && [ -z $http_proxy ]; then \
  http_proxy=$HTTP_PROXY; \
 fi; \
 if [ ! -z $HTTPS_PROXY ] && [ -z $https_proxy ]; then \
  https_proxy=$HTTPS_PROXY; \
 fi; \
 if [ ! -z $http_proxy ]; then \
  npm config set proxy $http_proxy; \
 fi; \
 if [ ! -z $https_proxy ]; then \
  npm config set https-proxy $https_proxy; \
 fi;

RUN npm run build

RUN mv dist ../
