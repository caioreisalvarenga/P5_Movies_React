import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div className="container" style={{ backgroundColor: "#fff" }}>
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} className="movie-card" style={{ border: "none", borderRadius: "10px" }} />)}
      </div>
    </div>
  );
};

export default Home;
