# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
npm install
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


### Docker

Build/run docs site using **docker**

##### build
```
docker build . -f ./Dockerfile -t docver-docs:local
```

This command starts docker build

##### run
```
docker run -it --rm -e NG_SERVER_NAME=localhost -e NG_LISTEN=3000 -p 3000:3000 docver-docs:local
```

This command starts the container, and the site is available on localhost

### docker-compose

Build/run docs site using **docker-compose**

##### docker-compose build
```
docker-compose build
```

Build services defined in **docker-compose.yml** file

##### docker-compose up
```
docker-compose up
```

Run services defined in **docker-compose.yml** file