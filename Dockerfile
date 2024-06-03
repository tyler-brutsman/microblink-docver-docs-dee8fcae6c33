# Example build command:
# docker build . -f ./Dockerfile -t docver-docs:local --no-cache
# Example run command:
# docker run -it --rm -e NG_SERVER_NAME=localhost -e NG_LISTEN=3000 -p 3000:3000 docver-docs:local


# Stage 1 - the build process
FROM node:18-alpine as build

RUN apk add --no-cache python3 py3-pip make g++
# restore & build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.25.4-alpine
WORKDIR /opt/init
RUN apk add --upgrade curl openssl libxml2
COPY ["nginx.conf.template", "entrypoint.sh", "./"]
COPY --from=build /usr/src/app/build /var/www
EXPOSE 80
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]