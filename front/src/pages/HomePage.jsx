import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/HomeHero";
import axios from "axios";
import Loader from "../components/common/Loader";
import CardSlider from "../components/CardSlider";

export function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [ranMovie, setRanMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getMovies() {
    const url = "http://127.0.0.1:8000/api/movies";
    const movies = await (await axios.get(url)).data;
    setRanMovie(choose(movies.filter((movie) => movie.tag === null)));
    setMovies(movies);
    setIsLoading(false);
    return movies;
  }
  async function updateMovies() {
    const url = "http://127.0.0.1:8000/api/movies";
    const movies = await (await axios.get(url)).data;
    setMovies(movies);
    return movies;
  }
  const handleLike = (movie) => {
    axios.patch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
      is_liked: !movie.is_liked,
    });
  };
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      getMovies();
      mounted.current = true;
    } else {
      updateMovies();
    }
  });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="home"
          style={{ backgroundImage: `url('${ranMovie.poster}')` }}
        >
          <NavBar />
          <Hero movie={ranMovie} />

          <CardSlider
            movies={movies.filter((movie) => movie.tag === "f")}
            title={"Featured Movie"}
            handleLike={handleLike}
          />
          <CardSlider
            movies={movies.filter((movie) => movie.tag === "n")}
            title={"New Arrival"}
            handleLike={handleLike}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
