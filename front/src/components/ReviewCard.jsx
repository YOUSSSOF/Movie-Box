import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { choose } from "../pages/HomePage";

const colors = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "orange",
  "purple",
  "red",
  "silver",
  "teal",
  "yellow",
];

function ReviewCard({ review }) {
  return (
    <Card sx={{ maxWidth: 350 }} elevation={3}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: choose(colors) }}>{review.author[0]}</Avatar>
        }
        title={review.author.toUpperCase()}
        subheader={review.email}
      />
      <CardContent>
        <Typography>{review.content}</Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
