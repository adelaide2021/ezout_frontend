#FROM node:20

#WORKDIR /app

#COPY package*.json yarn.lock ./

#RUN npm install
from nginx:1.25.1

COPY ./dist /usr/share/nginx/html

#EXPOSE 3000

#CMD ["npm", "start", "--host", "0.0.0.0"]

