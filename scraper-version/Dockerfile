
ARG NODE_VERSION=21.0.0

FROM node:${NODE_VERSION}-bookworm AS build

ARG DOCKER_WORKDIR

WORKDIR ${DOCKER_WORKDIR}

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci

RUN npx -y playwright@1.43.0 install chromium --with-deps

COPY . .

RUN npm run build



FROM build

CMD [ "npm", "run", "start" ]