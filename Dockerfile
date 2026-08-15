# Étape 1 : Build de l'application Angular
FROM node:22-alpine AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Compiler l'application pour la production
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier la configuration Nginx personnalisée pour les applications SPA (Single Page Application)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers compilés depuis l'étape de build.
# Le builder application d'Angular 17+ place généralement les fichiers statiques dans le sous-dossier /browser
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/colifast-workspace/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
