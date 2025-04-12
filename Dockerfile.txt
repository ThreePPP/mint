FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .


RUN npm run build

EXPOSE 3999

CMD ["npm", "run", "preview"]