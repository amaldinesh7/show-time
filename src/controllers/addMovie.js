const Model = require('../connect');

module.exports = {
    addMovie: (request, reply) => {
        Model.Movies.create({
            title: request.payload.title,
            genre: request.payload.genre,
            rating: request.payload.rating
        }).then( ans => {
            if (ans['id']) {
                reply ({status: 200, statusText: "OK", message: "Successfully Added!"});
            }
            else {
                reply("Error!!! Movie not added.");
            }
        })

    }
}