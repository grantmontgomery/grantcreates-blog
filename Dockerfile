FROM node:12

WORKDIR /
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]