const controllers = require("../controllers/index");

exports.configureRoutes = (server) => {
  return server.route([
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
