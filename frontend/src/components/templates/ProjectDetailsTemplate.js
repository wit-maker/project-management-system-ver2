import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography, CircularProgress, Button } from "@mui/material";
import ProjectCard from "../molecules/ProjectCard";
import TaskList from "../organisms/TaskList";
import { deleteProject } from "../../store/actions/projectActions";
import EditProjectForm from "../organisms/EditProjectForm";

const ProjectDetailsTemplate = ({ project, tasks, loading, error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const handleDeleteProject = () => {
    dispatch(deleteProject(project._id)).then(() => {
      navigate("/");
    });
  };

  const handleEditProject = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

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

  if (!project) {
    return (
      <Container>
        <Typography variant="h6">Project not found</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Project Details
      </Typography>
      <ProjectCard project={project} />
      <Typography variant="h5" component="h2" gutterBottom>
        Tasks
      </Typography>
      <TaskList tasks={tasks} />
      {editing ? (
        <EditProjectForm project={project} onCancel={handleCancelEdit} />
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditProject}
            sx={{ mr: 2 }}
          >
            Edit Project
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteProject}
          >
            Delete Project
          </Button>
        </>
      )}
    </Container>
  );
};

export default ProjectDetailsTemplate;
