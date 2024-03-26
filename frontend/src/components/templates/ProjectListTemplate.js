import React from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import ProjectList from "../organisms/ProjectList";
import NewProjectForm from "../organisms/NewProjectForm";

const ProjectListTemplate = ({ projects, loading, error }) => {
  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error.message}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <NewProjectForm />
      <ProjectList projects={projects} />
    </Container>
  );
};

export default ProjectListTemplate;
