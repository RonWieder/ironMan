FROM node:latest as node

WORKDIR /app


COPY . .

RUN npm i

RUN npm run optibuild


FROM nginx:alpine

COPY --from=node /app/dist/ironSourceMan /usr/share/nginx/html
