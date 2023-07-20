const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
const apiKey = process.env.API;




app.get("/", async (req, res, next) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
        params: {
          api_key: 'b659ae2e8af9cd759276b69f5b03302b',
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
