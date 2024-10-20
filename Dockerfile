FROM node:18 AS build
WORKDIR /app
COPY . /app
RUN npm install -g vite
RUN npm i
RUN vite build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/server.js /app/server.js
COPY --from=build /app/.env /app/.env
RUN if [ -f /app/.env ]; then cat /app/.env | grep PORT | cut -d= -f2; else cat /app/.env.template | grep PORT | cut -d= -f2; fi
EXPOSE $PORT
CMD ["node", "server.js"]
