import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import Button from "../atoms/Button";

const TaskCard = ({ task }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{task.name}</Typography>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="body2">Status: {task.status}</Typography>
        <Typography variant="body2">Assignee: {task.assignee}</Typography>
        <Typography variant="body2">Start Date: {task.startDate}</Typography>
        <Typography variant="body2">End Date: {task.endDate}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/tasks/${task._id}`}>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
