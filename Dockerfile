# Dockerfile para el backend de Shopify Video Generator
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de la app
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando para correr la app
CMD ["node", "server.js"]
