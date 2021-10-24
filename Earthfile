# TypeScript build
FROM node:14
LABEL org.opencontainers.image.source=https://github.com/Kesin11/CIAnalyzer
LABEL org.opencontainers.image.authors=kesin1202000@gmail.com
WORKDIR /build

all:
  BUILD +build
  BUILD +test
  BUILD +docker

deps:
  COPY package.json package-lock.json .
  RUN npm i -g npm@v7
  RUN npm ci

build:
  FROM +deps
  COPY --dir src tsconfig.json .
  COPY ./proto+protoc/pb_types src/pb_types
  RUN npm run build:clean
  SAVE ARTIFACT dist AS LOCAL ./dist

proto:
  BUILD ./proto+protoc
  COPY ./proto+protoc/pb_types /tmp/pb_types
  COPY ./proto+protoc/schema /tmp/schema
  SAVE ARTIFACT /tmp/pb_types/* AS LOCAL ./src/pb_types/
  SAVE ARTIFACT /tmp/schema/* AS LOCAL ./bigquery_schema/

test:
  FROM +deps
  COPY --dir src tsconfig.json \
      __tests__ jest.config.js bigquery_schema ./
  COPY ./proto+protoc/pb_types src/pb_types
  COPY ./proto+protoc/schema bigquery_schema/
  RUN npm run test:ci
  SAVE ARTIFACT junit AS LOCAL ./junit
  SAVE ARTIFACT coverage AS LOCAL ./coverage

docker:
  FROM node:14-alpine
  WORKDIR /ci_analyzer
  # Resolve nodejs pid=1 problem
  RUN apk add --no-cache tini

  # Download dependencies
  COPY package.json package-lock.json .
  RUN npm ci --production && rm -rf ~/.npm

  COPY . .
  COPY ./proto+protoc/pb_types src/pb_types
  COPY ./proto+protoc/schema bigquery_schema/
  COPY +build/dist ./dist

  # Make "ci_analyzer" command alias
  RUN cd dist && ln -s index.js ci_analyzer && chmod +x ci_analyzer
  ENV PATH=/ci_analyzer/dist:$PATH

  ENTRYPOINT [ "/sbin/tini", "--", "node", "/ci_analyzer/dist/index.js" ]
  WORKDIR /app

  SAVE IMAGE --push ghcr.io/kesin11/ci_analyzer