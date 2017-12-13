FROM node:carbon-alpine

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app

WORKDIR /app
ADD . /app

USER node
EXPOSE 4000
EXPOSE 5858

CMD ["npm", "start"]

