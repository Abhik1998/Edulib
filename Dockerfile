FROM node:12
WORKDIR $HOME/src
COPY package.json $HOME/src
RUN npm install
COPY . $HOME/src
EXPOSE 8081
CMD ["npm", "start"]