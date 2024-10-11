FROM node:18 AS build
WORKDIR /app
COPY . /app
RUN npm i
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/server.js /app/server.js
EXPOSE 3000
CMD ["node", "server.js"]
