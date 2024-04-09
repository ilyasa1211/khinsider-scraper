
ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine

ARG DOCKER_WORKDIR

WORKDIR ${DOCKER_WORKDIR}

RUN --mount=type=bind,source=package.json,destination=package.json \
    --mount=type=bind,source=package-lock.json,destination=package-lock.json \
    --mount=type=bind,source=webpack.config.js,destination=webpack.config.js \
    npm ci

COPY . .

CMD ["npm", "run", "build"]
