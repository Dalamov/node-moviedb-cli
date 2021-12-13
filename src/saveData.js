const fs = require("fs");

function saveMovies(movies, options) {
  let path = "";

  if (options.popular) {
    path = "bin/movies/popular.json";
  } else if (options.nowPlaying) {
    path = "bin/movies/now_playing.json";
  }

  fs.appendFile(path, movies, (err) => {
    if (err) console.log(err);
  });
}

function savePersons(persons) {
  let path = "bin/persons/persons.json";

  fs.appendFile(path, persons, (err) => {
    if (err) console.log(err);
  });
}

module.exports = {
  saveMovies: saveMovies,
  savePersons: savePersons,
};
