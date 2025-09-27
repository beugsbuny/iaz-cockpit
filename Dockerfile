# Étape 1 : image Node.js
FROM node:18

# Étape 2 : dossier de travail
WORKDIR /app

# Étape 3 : copier les fichiers essentiels
COPY package.json ./
COPY tsconfig.json ./
COPY runWorkflow.ts ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : lancer le cockpit IA
CMD ["npx", "ts-node", "runWorkflow.ts"]
