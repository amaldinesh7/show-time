"use strict";

const Hapi = require("hapi");
const Bell = require("bell");
// const Vision = require("vision"); start

const { configureRoutes } = require("./src/routes/routes");

const init = async () => {
  const server = new Hapi.Server({
    connections: {
      routes: {
        cors: true,
        payload: {
          maxBytes: 16384
        },
        security: {
          hsts: {
            maxAge: 15552000,
            includeSubdomains: true
          },
          xframe: true,
          xss: true,
          noOpen: false,
          noSniff: true
        },
      }
    }
  });
  server.connection({

    port: 3001, host: "localhost"
  });

  await server.register(Bell)
  
  server.auth.strategy('github', 'bell', {
    provider: 'github',
    password: 'cookie_encryption_password_secure',
    isSecure: false,                                    // For testing or in environments secured via other means
    clientId: '646cd12f2839d407d20b',
    clientSecret: 'ea5ea3a82ecaf4862c69a08d0efdddf4c796a017',
    location: 'http://localhost:3001',
    scope: []
  });


  configureRoutes(server);
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

init();