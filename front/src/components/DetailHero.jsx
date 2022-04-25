import React from "react";
import Imdb from "../assets/icons/imdb.png";
import Rotten from "../assets/icons/rotten.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
function DetailHero({ movie }) {
  return (
    <div className="detail-hero">
      <img src={movie.poster} alt="" className="poster" />
      <div className="info">
        <h1 className="title">{movie.title}</h1>
        <p className="">{movie.desc}</p>
        <span className="country" style={{ color: "red" }}>
          {movie.country}
        </span>
        <div className="genres yc">
          {movie.genres.map((genre) => (
            <p key={genre.id}>
              {genre.title}{" "}
              {genre !== movie.genres[movie.genres.length - 1] ? ", " : ""}
            </p>
          ))}
        </div>
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
        {movie.is_liked ? (
          <FavoriteIcon
            style={{
              color: "red",
              width: "3rem",
              height: "3rem",
              marginTop: "3rem",
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DetailHero;
