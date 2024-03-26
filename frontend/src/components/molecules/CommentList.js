// CommentList.js
import React from "react";
import { List, ListItem } from "@mui/material";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <List>
      {comments.map((comment) => (
        <ListItem key={comment._id}>
          <CommentCard comment={comment} />
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;
