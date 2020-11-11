FROM node:12.13

WORKDIR /app
COPY package.json .
RUN npm install
# RUN npm install react-script@3.4.3 -g
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
