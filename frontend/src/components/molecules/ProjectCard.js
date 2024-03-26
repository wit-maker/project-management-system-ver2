import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import Button from "../atoms/Button";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body1">{project.description}</Typography>
        <Typography variant="body2">Status: {project.status}</Typography>
        <Typography variant="body2">Start Date: {project.startDate}</Typography>
        <Typography variant="body2">End Date: {project.endDate}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/projects/${project._id}`}>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
