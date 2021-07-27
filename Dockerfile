FROM node:12-alpine

WORKDIR /
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "build"]