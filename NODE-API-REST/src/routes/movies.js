import { Router } from "express";
import movies from "../sample.json" assert { type: "json" };
import underscore from "underscore";
const movie = Router();
const _ = underscore;

movie.get("/", (req, res) => {
  res.json(movies);
});

movie.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { id, ...req.body };
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({ error: "there was an error" });
  }
});

movie.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    _.each(movies, (Movie,i) => {
     if (Movie.id == id) {
       Movie.title = title;
       Movie.director = director;
       Movie.year = year;
       Movie.rating = rating;
     } 
    })
    res.json(movies)
  } else {
    res.status(500).json({error: "there was an error"})
  }
});

movie.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(movies, (Movie, i) => {
    if (Movie.id == id) {
      movies.splice(i, 1);
    }
    res.send(movies);
  });
});

export default movie;
