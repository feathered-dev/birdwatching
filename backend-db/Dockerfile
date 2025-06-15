FROM node:22-alpine
WORKDIR /app

COPY . .
# install yarn and install dependencies
RUN apk add yarn
RUN yarn init -y

CMD [ "yarn", "run", "alt-build" ]