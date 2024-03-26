import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from '../molecules/ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Grid item key={project._id} xs={12} sm={6} md={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
