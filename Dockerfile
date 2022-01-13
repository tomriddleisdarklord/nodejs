FROM node:14
WORKDIR /
COPY package*.json app.js /
COPY server.js /
COPY app.test.js /
COPY babel.config.cjs /
RUN npm install
EXPOSE 8000
CMD ["node", "server.js"]
