FROM node:12 AS build

WORKDIR /test

COPY package.json ./
COPY package-lock.json ./

COPY ./src ./src
COPY ./public ./public
RUN npm install

RUN npm install regexparam
RUN npm install axios
COPY ./node_modules/regexparam/package.json ./node_modules/regexparam/package.json




COPY . ./
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/public /usr/share/nginx/html
