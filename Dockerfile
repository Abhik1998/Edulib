FROM node:12
WORKDIR $work/src
COPY package.json $work/src
RUN npm install
COPY . $work/src
EXPOSE 8081
CMD ["npm", "start"]