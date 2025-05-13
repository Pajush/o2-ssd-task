FROM node:22-alpine AS builder

WORKDIR /app
COPY . .

RUN ["npm", "i", "--force"]
RUN ["npm", "run", "build"]

FROM nginx:alpine

WORKDIR /usr/share/nginx/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder ./app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
