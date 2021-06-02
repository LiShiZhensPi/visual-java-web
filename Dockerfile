FROM openjdk:16-slim-buster

# install nodejs and npm
RUN apt-get update; apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && curl -L https://www.npmjs.com/install.sh | sh 

# install simple http server for serving static content
RUN npm install -g http-server
# make the 'app' folder the current working directory
WORKDIR /home

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
COPY server .

# build app for production with minification
RUN npm run build

EXPOSE 8080
EXPOSE 8081
# CMD ["node","server.js"]
# CMD [ "http-server", "dist" ]
CMD ["sh","-c","mkdir get_files&node server.js&http-server dist"]
