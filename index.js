const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
const apiKey = process.env.API;


app.get("/", (req, res) => {
    res.send("Welcome to my Movie API");
}
);

app.get("/trending", async (req, res, next) => {
    try {
      const response = await axios.get(`${process.env.URL}/trending/movie/week`, {
        params: {
          api_key: process.env.APIKey,
        },
      });
  
      const movies = response.data.results;
      const formattedMovies = movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
      }));
  
      res.json(formattedMovies);
    } catch (error) {
      next(error);
    }
  });
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
