import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import TaskCard from "../molecules/TaskCard";

const TaskKanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks.data);

  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Todo
        </Typography>
        {todoTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          In Progress
        </Typography>
        {inProgressTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Completed
        </Typography>
        {completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </Grid>
    </Grid>
  );
};

export default TaskKanbanBoard;
