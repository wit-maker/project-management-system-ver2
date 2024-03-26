// CommentCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CommentCard = ({ comment }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">{comment.text}</Typography>
        <Typography variant="body2" color="text.secondary">
          {comment.author} - {new Date(comment.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
