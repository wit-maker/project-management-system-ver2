import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import TaskCard from '../molecules/TaskCard';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.data);

  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item key={task._id} xs={12} sm={6} md={4}>
          <TaskCard task={task} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
