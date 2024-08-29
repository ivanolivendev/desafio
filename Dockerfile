# Usando a imagem oficial do Node.js
FROM node:16-alpine

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando o arquivo de pacotes e instalando dependências
COPY package*.json ./
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Construindo a aplicação NestJS
RUN npm run build

# Expondo a porta usada pelo NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
