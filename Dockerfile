FROM node:latest

WORKDIR /server

COPY . /server


RUN npm install

RUN npm run prebuild

RUN npm run build

CMD [ "npm", "run", "start", "--port", "3000" ]
