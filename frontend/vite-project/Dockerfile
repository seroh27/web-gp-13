ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV dev
ENV PORT 5173

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./

RUN npm i

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE ${PORT}

# Run the application.
CMD npm run dev -- --host