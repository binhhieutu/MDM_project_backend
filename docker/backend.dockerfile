FROM node:18-alpine3.15
EXPOSE 7412
ENV NODE_ENV=local
WORKDIR /app
COPY . .
RUN npm install
RUN npm install  --only=dev
CMD ["npm", "run", "start-dev"]