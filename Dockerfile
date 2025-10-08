FROM node:24

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/frontend
RUN npm i
RUN npm run build

WORKDIR /usr/src/app/backend
RUN npm i

EXPOSE 3000

CMD [ "node", "app.js" ]