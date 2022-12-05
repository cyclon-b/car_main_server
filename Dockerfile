FROM node:latest

WORKDIR /server

COPY . /server

RUN npm install && npm run build
