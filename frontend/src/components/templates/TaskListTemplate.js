import React from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import TaskList from "../organisms/TaskList";
import NewTaskForm from "../organisms/NewTaskForm";

const TaskListTemplate = ({ tasks, loading, error }) => {
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
        Tasks
      </Typography>
      <NewTaskForm />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default TaskListTemplate;
