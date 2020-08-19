const addMovie = require("./addMovie");
const updateMovie = require("./updateMovie");
const updateRating = require("./updateRating");
const deleteMovie = require("./deleteMovie");
const listAllMovies = require("./listAllMovies");
const movieDetails = require("./movieDetails");
const logoutCurrentUser = require("./logoutCurrentUser");

module.exports = {
  addMovie,
  updateMovie,
  updateRating,
  deleteMovie,
  listAllMovies,
  movieDetails,
  logoutCurrentUser,
};
