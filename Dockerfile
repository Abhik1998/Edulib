FROM node:12
WORKDIR $workdir/src
COPY package.json $workdir/src
RUN npm install
COPY . $workdir/src
CMD node index.js
EXPOSE 8081