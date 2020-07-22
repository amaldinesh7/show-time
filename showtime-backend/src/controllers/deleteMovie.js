const Model = require("../connect");

module.exports = {
  deleteMovie: (request, reply) => {
    var movieId = request.params.movieid;
    Model.Movies.destroy({
      where: { id: movieId },
    }).then((ans) => {
      if (ans) {
        reply({
          status: 200,
          statusText: "OK",
          message: "Successfully Deleted!",
        });
      } else {
        reply("Error!!! Movie not deleted.");
      }
    });
  },
};
