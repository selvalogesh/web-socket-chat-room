ARG PORT

# ------------------------ UI Build Stage --------------------

FROM node:16.20.0-bullseye-slim AS buildstage

WORKDIR /tmp

COPY ./app/package*.json .

RUN npm install

COPY ./app/ .

RUN npm run build

# ------------------------ Production Stage --------------------

FROM node:lts-bullseye-slim

WORKDIR /app

COPY ./server/package*.json .

RUN npm install

COPY ./server/ .

COPY --from=buildstage /tmp/build ./src/public

CMD ["npm", "run", "start"]