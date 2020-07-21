const Model = require('../connect');

module.exports = {
    movieDetails :  (request,reply) => {
        var movieId = request.params.movieid;
        Model.Movies.findAll({
            where: { id : movieId }
          }).then(ans => {
              if (ans.length===0){
                  reply("Error!!! No movie in this particular ID.")
              }
              else{
                  reply(ans)
              }
          })
        }
    }