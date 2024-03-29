// frontend/src/components/templates/TaskGanttTemplate.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/actions/taskActions";
import { fetchProjects } from "../../store/actions/projectActions";
import { fetchUsers } from "../../store/actions/userActions";
import GanttChart from "../organisms/GanttChart";

const TaskGanttTemplate = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || [];
  const projects = useSelector((state) => state.projects.projects) || []; // この行を追加
  const users = useSelector((state) => state.users.users) || [];

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchProjects());
    dispatch(fetchUsers());
  }, []);

  const formattedTasks = tasks.map((task) => {
    const project = projects.find((p) => p._id === task.projectId);
    const assignee = users.find((u) => u._id === task.assignee); // ユーザーデータから担当者を取得
    return {
      ...task,
      startDate: new Date(task.startDate),
      endDate: new Date(task.endDate),
      project: project ? project.name : "",
      assignee: assignee ? `${assignee.name} (${assignee.email})` : "", // ユーザー名とメールアドレスを表示
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
