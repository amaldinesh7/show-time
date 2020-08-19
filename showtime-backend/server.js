"use strict";

const Hapi = require("hapi");
const Bell = require("bell");
const Vision = require("vision");
const Ejs = require('ejs');
const Cookies = require('hapi-auth-cookie');

const { configureRoutes } = require("./src/routes/routes");
const Model = require('./src/connect');


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

  await server.register([Bell, Vision, Cookies]);

  server.views({
    engines: {
      ejs: Ejs
    },
    relativeTo: __dirname,
    path: 'templates'
  });

  server.auth.strategy('github', 'bell', {
    provider: 'github',
    password: 'cookie_encryption_password_secure',
    isSecure: false,                                    // For testing or in environments secured via other means
    clientId: '646cd12f2839d407d20b',
    clientSecret: 'ea5ea3a82ecaf4862c69a08d0efdddf4c796a017',
    location: 'http://localhost:3001',
    scope: []
  });

  server.auth.strategy('facebook', 'bell', {
    provider: 'facebook',
    password: 'cookie_encryption_password_secure',
    isSecure: false,
    clientId: '2012837868858000',
    clientSecret: 'e973a89c7344be1f7b24067c131a0f97',
    location: 'http://localhost:3001',
  });

  server.auth.strategy('session', 'cookie', {
    password: 'blah123asdklfaslfkajsdfklasdasdfasdfasdf',
    cookie: 'sid',
    redirectTo: '/',
    isSameSite: false,
    isSecure: false,
    validateFunc: async (request, session, callback) => {

      const userSession = await Model.Sessions.findOne({
        where: {
          session_token: request.state.sid.token
        }
      });
      const hasCookie = !!userSession;
      if (!hasCookie) {
        return callback(null, false);
      } else {
        return callback(null, true);
      }
    }
  })

  configureRoutes(server);
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

init();