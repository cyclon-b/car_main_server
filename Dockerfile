FROM node:latest

RUN mkdir server

WORKDIR /server

COPY . /server


RUN npm install

RUN npm run build

CMD [ "npm", "run", "start:prod", "--port", "3000" ]
