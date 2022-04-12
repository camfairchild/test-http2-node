FROM node:erbium-alpine3.15
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache nodejs
RUN yarn install
CMD ["node", "index.js"]

EXPOSE 5000