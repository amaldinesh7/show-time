const controllers = require("../controllers/index");
const Model = require("../connect");


const baseUrl = 'http://localhost:3000';

exports.configureRoutes = (server) => {

  return server.route([
    {
      method: ['GET', 'POST'],
      path: '/login/github',
      config: {
        plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        cors: {
          origin: ["*"],
          additionalHeaders: [
            "Access-Control-Allow-Headers: Origin, Content-Type, x-ms-request-id , Authorization",
            'cache-control', 'x-requested-with'
          ]
        },
        auth: {
          strategy: 'github',
          mode: 'try'
        },
        handler: function (request, reply) {
          if (!request.auth.isAuthenticated) {
            return reply('Authentication failed due to: ' + request.auth.error.message);
          }

          Model.Sessions.create({
            session_token: request.auth.credentials.token,
          });

          tokenValue = request.auth.credentials.token
          request.cookieAuth.set({ token: tokenValue });
          reply.redirect(`http://localhost:3001/movies`);
        }
      }
    },
    {
      method: ['GET', 'POST'],
      path: '/login/facebook',
      config: {
        plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        cors: {
          origin: ["*"],
          additionalHeaders: [
            "Access-Control-Allow-Headers: Origin, Content-Type, x-ms-request-id , Authorization",
            'cache-control', 'x-requested-with'
          ]
        },
        auth: {
          strategy: 'facebook',
          mode: 'try'
        },
        handler: function (request, reply) {
          if (!request.auth.isAuthenticated) {
            return reply('Authentication failed due to: ' + request.auth.error.message);
          }

          Model.Sessions.create({
            session_token: request.auth.credentials.token,
          });

          tokenValue = request.auth.credentials.token
          request.cookieAuth.set({ token: tokenValue });
          reply.redirect(`http://localhost:3001/movies`);
        }
      }
    },

    {
      method: "POST",
      path: "/addmovie",
      handler: controllers.addMovie.addMovie,
    },
    {
      method: "PUT",
      path: "/updatemovie/{movieid}",
      handler: controllers.updateMovie.updateMovie,
    },
    {
      method: "PUT",
      path: "/updaterating/{movieid}",
      handler: controllers.updateRating.updateRating,
    },
    {
      method: "DELETE",
      path: "/deletemovie/{movieid}",
      handler: controllers.deleteMovie.deleteMovie,
    },
    {
      method: "GET",
      path: "/allmovies",
      handler: controllers.listAllMovies.listAllMovies,
    },
    {
      method: "GET",
      path: "/moviedetails/{movieid}",
      handler: controllers.movieDetails.movieDetails,
    },
    {
      method: "DELETE",
      path: "/logout",
      handler: controllers.logoutCurrentUser.logoutCurrentUser,
    },
    {
      method: 'GET',
      path: '/',
      config: {
        handler: (request, reply) => {
          if (true || request.auth.isAuthenticated) {
            reply.view('index', {
              templateData: {
                baseUrl,
                title: 'Movie App'
              }
            });
          } else {
            reply('Not authenticated');
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/movies',
      config: {
        auth: {
          strategy: 'session',
          mode: 'try'
        },
        handler: (request, reply) => {
          reply.view('index', {
            templateData: {
              baseUrl,
              title: 'Movie App'
            }
          });
        }
      }
    },
    {
      method: 'GET',
      path: '/addmovies',
      config: {
        auth: {
          strategy: 'session',
          mode: 'try'
        }
      },
      handler: (request, reply) => {
        reply.view('index', {
          templateData: {
            baseUrl,
            title: 'Movie App'
          }
        });
      }
    },
    {
      method: 'GET',
      path: '/:id/updatemovie',
      handler: (request, reply) => {
        reply.view('index', {
          templateData: {
            baseUrl,
            title: 'Movie App'
          }
        });
      }
    }
  ]);
};
