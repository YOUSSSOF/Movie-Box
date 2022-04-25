import { Grid } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

function CardSlider({ movies, title, handleLike }) {
  return (
    <div className="slider">
      <h1 className="slider--title">{title}</h1>
      <div className="content">
        <Grid container spacing={10}>
          {movies.map((movie) => (
            <Grid
              item
              key={movie.id}
              md={4}
              sm={6}
              lg={3}
              className="movie-item"
            >
              <MovieCard movie={movie} handleLike={handleLike} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default CardSlider;
