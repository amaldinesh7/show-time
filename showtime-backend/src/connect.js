"use strict";

var Sequelize = require("sequelize");

var sequelize = new Sequelize("showtime", "showtimeuser", "", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Model Defenition
const Movies = sequelize.define("movies", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});
Movies.sync();

module.exports = {
  Movies,
};
