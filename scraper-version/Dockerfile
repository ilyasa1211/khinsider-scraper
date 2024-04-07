
ARG NODE_VERSION=21.0.0
ARG TARGET_URL

FROM node:${NODE_VERSION}-bookworm AS build

ENV CHROME_EXECUTABLE_PATH=/root/.cache/ms-playwright/chromium-1112/chrome-linux/chrome

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci

RUN npx -y playwright@1.43.0 install chromium --with-deps

COPY . .

RUN npm run build



FROM build

# USER node

RUN ls /root/.cache/ms-playwright/chromium-1112/chrome-linux/

USER node

CMD [ "npm", "run", "start" ]