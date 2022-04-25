import React from "react";
import ReviewCard from "./ReviewCard";
import Masonry from "react-masonry-css";
import { Grid, TextField, Button } from "@mui/material";

function Reviews({ handleLeaveComment, reviews }) {
  const breakpoints = {
    default: 4,
    1391: 3,
    1081: 2,
    800: 1,
  };

  return (
    <div className="reviews">
      {reviews && (
        <div>
          <h1>Reviews</h1>
          <div className="leave-comment">
            <form onSubmit={(e) => handleLeaveComment(e)}>
              <TextField
                fullWidth
                placeholder="Your Name"
                style={{ marginBottom: "3rem" }}
                name="author"
                // onChange={(e) => setAuthor(e.target.value)}
              />
              <TextField
                fullWidth
                placeholder="Your email"
                style={{ marginBottom: "3rem" }}
                name="email"
                // onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                multiline
                rows={5}
                fullWidth
                placeholder="Your review..."
                style={{ marginBottom: "3rem" }}
                name="comment"
                // onChange={(e) => setContent(e.target.value)}
              />
              <Button
                variant="contained"
                style={{ padding: "1rem 3rem" }}
                type="submit"
              >
                Leave
              </Button>
            </form>
          </div>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {reviews.map((review) => (
              <Grid item key={review.id}>
                <ReviewCard review={review} />
              </Grid>
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
}

export default Reviews;
