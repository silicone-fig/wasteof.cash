FROM node:18 AS build
WORKDIR /app
COPY . /app
RUN npm install -g vite
RUN npm i
RUN vite build
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
EXPOSE 3000
CMD ["node", "build"]

