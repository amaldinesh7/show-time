const Model = require("../connect");

module.exports = {
  updateMovie: (request, reply) => {
    Model.Movies.update(
      {
        title: request.payload.title,
        genre: request.payload.genre,
      },
      {
        where: {
          id: request.params.movieid,
        },
      }
    ).then((ans) => {
      if (ans[0]) {
        reply({
          status: 200,
          statusText: "OK",
          message: "Successfully Updated!",
        });
      } else {
        reply("Error!!! Movie not updated");
      }
    });
  },
};
