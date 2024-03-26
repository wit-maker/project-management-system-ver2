import React from "react";
import { Container, Typography } from "@mui/material";
import TaskKanbanBoard from "../organisms/TaskKanbanBoard";

const TaskKanbanTemplate = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Task Kanban Board
      </Typography>
      <TaskKanbanBoard />
    </Container>
  );
};

export default TaskKanbanTemplate;
