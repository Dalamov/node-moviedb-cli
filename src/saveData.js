const fs = require("fs");

function saveMovies(movies, options) {
  let path = "";

  if (options.popular) {
    path = "bin/movies/popular.json";
  } else if (options.nowPlaying) {
    path = "bin/movies/now_playing.json";
  }

  fs.access(path, () => {
    try {
      fs.appendFile(path, movies);
    } catch (err) {
      if (err.code == "ENOENT") {
        fs.mkdir(path);
        fs.appendFile(path, persons);
      }
    }
  });
}

function savePersons(persons) {
  let path = "bin/persons/persons.json";
  if (fs.access(path)) {
    fs.appendFile(path, persons);
  } else {
    fs.mkdir(path);
    fs.appendFile(path, persons);
  }
}

module.exports = {
  saveMovies: saveMovies,
  savePersons: savePersons,
};
