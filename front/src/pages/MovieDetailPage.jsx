import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import DetailHero from "../components/DetailHero";
import Reviews from "../components/Reviews";
import Loader from "../components/common/Loader";
import axios from "axios";

function MovieDetailPage() {
  const location = useLocation();
  const { movie } = location.state;
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState(null);
  async function getReviews() {
    const url = `http://127.0.0.1:8000/api/movies/${movie.id}/reviews`;
    const reviews = await (await axios.get(url)).data;
    setReviews(reviews.reverse());
    setIsLoading(false);
    return reviews;
  }
  async function updateReviews() {
    const url = `http://127.0.0.1:8000/api/movies/${movie.id}/reviews`;
    const reviews = await (await axios.get(url)).data;
    setReviews(reviews.reverse());
    return reviews;
  }

  const handleLeaveComment = (e) => {
    e.preventDefault();
    const url = `http://127.0.0.1:8000/api/movies/${movie.id}/reviews/`;
    const review = {
      author: e.target.author.value,
      email: e.target.email.value,
      content: e.target.comment.value,
    };
    e.target.author.value = "";
    e.target.email.value = "";
    e.target.comment.value = "";
    axios
      .post(url, review)
      .then(() => updateReviews())
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="movie-detail">
          <NavBar />
          <DetailHero movie={movie} />
          <div className="review-detail">
            <Reviews
              reviews={reviews}
              movieId={movie.id}
              handleLeaveComment={handleLeaveComment}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailPage;
