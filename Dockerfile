FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy package.json in isolation to detect changes
ADD package.json /usr/src/app/
RUN npm install

ADD . /usr/src/app

ENV PORT 3000
EXPOSE 3000

CMD [ "npm", "start" ]
