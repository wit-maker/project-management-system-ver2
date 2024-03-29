// frontend/src/components/templates/TaskGanttTemplate.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/actions/taskActions";
import GanttChart from "../organisms/GanttChart";

const TaskGanttTemplate = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || [];

  useEffect(() => {
    dispatch(fetchTasks());
    // dispatch(fetchProjects());
  }, []);

  const formattedTasks = tasks.map((task) => ({
    ...task,
    startDate: new Date(task.startDate),
    endDate: new Date(task.endDate),
  }));

  console.log("Formatted Tasks:", formattedTasks); // ここを追加

  return (
    <div>
      <GanttChart tasks={formattedTasks} />
    </div>
  );
};

export default TaskGanttTemplate;
