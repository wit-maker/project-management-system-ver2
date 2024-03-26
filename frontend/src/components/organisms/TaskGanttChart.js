import React from "react";
import { useSelector } from "react-redux";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const TaskGanttChart = () => {
  const tasks = useSelector((state) => state.tasks.data);
  const projects = useSelector((state) => state.projects.data);

  const ganttTasks = tasks.map((task) => {
    const project = projects.find((project) => project._id === task.projectId);
    return {
      id: task._id,
      name: task.name,
      start: new Date(task.startDate),
      end: new Date(task.endDate),
      progress: task.status === "Completed" ? 100 : 0,
      type: "task",
      project: project ? project.name : "",
    };
  });

  return (
    <div>
      <Gantt tasks={ganttTasks} viewMode={ViewMode.Week} />
    </div>
  );
};

export default TaskGanttChart;
