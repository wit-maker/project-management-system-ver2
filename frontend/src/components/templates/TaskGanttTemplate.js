import React from 'react';
import { Container, Typography } from '@mui/material';
import TaskGanttChart from '../organisms/TaskGanttChart';

const TaskGanttTemplate = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Task Gantt Chart
      </Typography>
      <TaskGanttChart />
    </Container>
  );
};

export default TaskGanttTemplate;
