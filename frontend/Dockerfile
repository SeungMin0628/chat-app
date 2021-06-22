FROM node:16.3-alpine

RUN mkdir /frontend
WORKDIR /frontend

COPY  package.json \
      yarn.lock \
      ./

RUN yarn install --frozen-lockfile
