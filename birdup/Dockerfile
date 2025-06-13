FROM node:22-alpine AS builder
WORKDIR /app

# do build
COPY package.json yarn.lock ./
RUN apk add yarn
RUN yarn install

# copy the rest of the files we need
COPY . .

CMD [ "npx", "vite" ]