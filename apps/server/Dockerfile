FROM node:22-alpine AS build

WORKDIR /app

COPY . .

RUN npm i 
RUN npm i -g @nestjs/cli
RUN npm run build

FROM node:22-alpine AS server

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD [ "node", "dist/src/main.js" ]
