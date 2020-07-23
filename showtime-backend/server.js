"use strict";

const Hapi = require("hapi");

const { configureRoutes } = require("./src/routes/routes");

const server = new Hapi.Server();
server.connection({
  port: 3001, host: "localhost", routes: {
    cors: true
  }
});

configureRoutes(server);
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
