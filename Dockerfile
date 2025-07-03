FROM node:22

# Installation des dépendances natives nécessaires à better-sqlite3
RUN apt-get update && apt-get install -y build-essential python3 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

# Ajoute explicitement better-sqlite3 si ce n'est pas déjà dans ton package.json
RUN npm install better-sqlite3

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start" ]
