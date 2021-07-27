FROM node:14.17.3-buster as build

WORKDIR /
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "build"]


FROM nginx:1.12-alpine as prod
COPY --from=build /dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]