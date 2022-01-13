FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
RUN npm test
EXPOSE 8000
CMD ["node", "server.js"]
