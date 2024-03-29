// frontend/src/components/templates/TaskGanttTemplate.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/actions/taskActions";
import { fetchProjects } from "../../store/actions/projectActions";
import GanttChart from "../organisms/GanttChart";

const TaskGanttTemplate = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || [];
  const projects = useSelector((state) => state.projects.projects) || []; // この行を追加

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchProjects());
  }, []);

  const formattedTasks = tasks.map((task) => {
    const project = projects.find((p) => p._id === task.projectId._id);
    return {
      ...task,
      startDate: new Date(task.startDate),
      endDate: new Date(task.endDate),
      project: project ? project.name : "",
      projectId: task.projectId._id, // プロジェクトIDを追加
    };
  });

  console.log("Formatted Tasks:", formattedTasks); // ここを追加

  return (
    <div>
      <GanttChart tasks={formattedTasks} />
    </div>
  );
};

export default TaskGanttTemplate;
