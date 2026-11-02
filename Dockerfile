# ------------------------ UI Build Stage --------------------

# Build only (not shipped): react-scripts 4 needs Node 16's OpenSSL
FROM node:16.20.2-bullseye-slim AS buildstage

WORKDIR /tmp

COPY ./app/package*.json .

RUN npm ci

COPY ./app/ .

RUN npm run build

# ------------------------ Production Stage --------------------

FROM node:24-bookworm-slim

ENV NODE_ENV=production
# The node user can't write to /app, so skip babel-node's on-disk cache
ENV BABEL_DISABLE_CACHE=1

WORKDIR /app

COPY ./server/package*.json .

RUN npm ci --omit=dev && npm cache clean --force

COPY ./server/ .

COPY --from=buildstage /tmp/build ./src/public

# Docker lets non-root processes bind ports below 1024 inside the container
USER node

EXPOSE 80

CMD ["npm", "run", "start"]
