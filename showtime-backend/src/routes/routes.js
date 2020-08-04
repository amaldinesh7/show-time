const controllers = require("../controllers/index");
const baseUrl = 'http://localhost:3000';

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
      path: '/login/github',
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
          reply.redirect('http://localhost:3001/movies');
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
      method: 'GET',
      path: '/',
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
      path: '/movies',
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
      path: '/addmovies',
      handler: (request, reply) => {
        reply.view('index', {
          templateData: {
            baseUrl,
            title: 'Movie App'
          }
        });
      }
    }
    // {
    //   method: 'GET',
    //   path: '/addmovies',
    //   handler: (request, reply) => {
    //     reply.view('index', {
    //       templateData: {
    //         baseUrl,
    //         title: 'Movie App'
    //       }
    //     });
    //   }
    // }  
  ]);
};
