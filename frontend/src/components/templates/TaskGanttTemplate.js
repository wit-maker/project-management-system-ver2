import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import TaskGanttChart from "../organisms/TaskGanttChart";
import { fetchTasks } from "../../store/actions/taskActions";
import { fetchProjects } from "../../store/actions/projectActions";
import GanttChart from "../organisms/GanttChart";

const TaskGanttTemplate = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || [];

  useEffect(() => {
    dispatch(fetchTasks());
    // dispatch(fetchProjects());
  }, [dispatch]);

  const formattedTasks = tasks.map((task) => ({
    ...task,
    startDate: new Date(task.startDate),
    endDate: new Date(task.endDate),
  }));

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Task Gantt Chart
      </Typography>
      {/* <TaskGanttChart /> */}
      <GanttChart tasks={formattedTasks} />
    </Container>
  );
};

export default TaskGanttTemplate;
