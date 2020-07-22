"use strict";

const Hapi = require("hapi");

const { configureRoutes } = require("./src/routes/routes");

const server = new Hapi.Server();
server.connection({ port: 3000, host: "localhost" });

configureRoutes(server);
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
