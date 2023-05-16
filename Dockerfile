FROM node:18-alpine AS base

# install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --production --frozen-lockfile


# build the app
FROM base AS build
WORKDIR /usr/src/app

ENV NODE_ENV production

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build

# run the app
FROM base AS runner
WORKDIR /usr/src/app

ENV NODE_ENV production

COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static

CMD ['node', 'server.js']