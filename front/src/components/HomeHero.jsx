import React from "react";
import Imdb from "../assets/icons/imdb.png";
import Rotten from "../assets/icons/rotten.png";
import Play from "../assets/icons/Play.png";
import Tv from "../assets/images/tv.png";
import swal from "sweetalert";

function Hero({ movie }) {
  const handleWatchTrailer = (movie) => {
    if (movie.trailer) {
      return window.open(movie.trailer);
    }
    return swal({
      icon: Tv,
      title: "Trailer not found",
      text: "Sorry , trailer is not available for this movie. ",
    });
  };
  return (
    <div className="hero">
      <div className="movie-info">
        <h1 className="movie-name">{movie.title}</h1>
        <div className="rate">
          <div className="imdb">
            <img src={`${Imdb}`} alt="" />
            <p className="rate-num">{movie.imdb_rate} / 100</p>
          </div>
          <div className="rotten">
            <img src={`${Rotten}`} alt="" />
            <p className="rate-num">{movie.rotten_rate}%</p>
          </div>
        </div>
        <p className="desc">{movie.desc}</p>
        <button onClick={() => handleWatchTrailer(movie)}>
          <img src={`${Play}`} alt="" /> watch trailer
        </button>
      </div>
    </div>
  );
}

export default Hero;
