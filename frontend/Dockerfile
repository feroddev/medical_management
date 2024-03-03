# Usa uma imagem base Node.js
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Comando para compilar o projeto (substitua este comando pelo comando real necessário para compilar o seu frontend)
CMD ["npm", "run", "build"]
