const controllers = require("../controllers/index");

exports.configureRoutes = (server) => {

  return server.route([
    {
      method: 'GET',
      path: '/redirectGoogle',
      config: {
        handler: (request, reply) => {
          reply.redirect('https://google.com');
        }
      }
    },
    {
      method: ['GET','POST'],
      path: '/bell/door',
      config: {
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
          console.log("hitt");
          if (!request.auth.isAuthenticated) {
            return reply('Authentication failed due to: ' + request.auth.error.message);
          }
          reply('<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>');
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
  ]);
};
