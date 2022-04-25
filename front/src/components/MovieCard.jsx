import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import Imdb from "../assets/icons/imdb.png";
import Rotten from "../assets/icons/rotten.png";
import { Link } from "react-router-dom";

function MovieCard({ movie, handleLike }) {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  return (
    <div className="movie-card">
      <div className="heart" onClick={() => handleLike(movie)}>
        {movie.is_liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
      <img src={movie.poster} alt="" className="poster" />
      <Link
        to={`/${convertToSlug(movie.title)}`}
        style={{ textDecoration: "none" ,color:'inherit'}}
        state={{ movie: movie }}
      >
        <p className="yc">
          {movie.country} , {movie.released_year}
        </p>
        <p className="title">{movie.title}</p>
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

        <div className="genres">
          {movie.genres.map((genre) => (
            <p key={genre.id}>
              {genre.title}{" "}
              {genre !== movie.genres[movie.genres.length - 1] ? ", " : ""}
            </p>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
