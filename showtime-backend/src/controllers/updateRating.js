const Model = require("../connect");

module.exports = {
  updateRating: (request, reply) => {
    Model.Movies.update(
      {
        rating: request.payload.rating,
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
        reply("Error!!! Rating not updated");
      }
    });
  },
};
