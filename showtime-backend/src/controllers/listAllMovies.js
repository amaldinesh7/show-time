const Model = require("../connect");

module.exports = {
  listAllMovies: (request, reply) => {
    Model.Movies.findAll().then((ans) => {
      if (ans) {
        reply(ans);
      } else {
        reply("Error!!! Can't fetch movies");
      }
    });
  },
};
