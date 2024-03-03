# Usa uma imagem base Node.js
FROM node:18.19.0-alpine3.18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
