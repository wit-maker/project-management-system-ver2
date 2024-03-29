import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import ViewModeSwitcher from "../atoms/inputs/ViewModeSwitcher";
import useTaskDragDrop from "../../hooks/useTaskDragDrop";
import CustomTask from "../atoms/charts/CustomTask";

const TaskGanttChart = () => {
  const tasks = useSelector((state) => state.tasks.data);
  const projects = useSelector((state) => state.projects.data);
  const [viewMode, setViewMode] = useState(ViewMode.Week);
  const {
    handleDragStart,
    handleDrag,
    handleDragEnd,
    isDragging,
    draggedTask,
  } = useTaskDragDrop();
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });

  const ganttTasks = tasks
    .filter(
      (task) =>
        task.startDate &&
        task.endDate &&
        task.startDate instanceof Date && // string型ではなくDate型であることを確認
        task.endDate instanceof Date // string型ではなくDate型であることを確認
    )
    .map((task) => {
      const project = projects.find(
        (project) => project._id === task.projectId
      );
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

  const handleViewModeChange = (newViewMode) => {
    setViewMode(newViewMode);
  };

  const taskRenderer = (task) => (
    <CustomTask
      task={task}
      isDragging={isDragging && draggedTask === task}
      taskProps={task.props}
    />
  );

  const handleSelect = (task) => {
    console.log("handleSelect:", task);
    setSelectedTasks([...selectedTasks, task]);
  };

  const handleUnselect = (task) => {
    console.log("handleUnselect:", task);
    setSelectedTasks(selectedTasks.filter((t) => t !== task));
  };

  const handleDateRangeChange = (start, end) => {
    console.log("handleDateRangeChange:", start, end);
    setDateRange({ start, end });
  };

  const handleDoubleClick = (event, task) => {
    console.log("Double clicked task:", task);
    // 必要な処理を追加
  };

  return (
    <div>
      {ganttTasks.length > 0 ? (
        <Gantt
          tasks={ganttTasks}
          viewMode={viewMode}
          onSelect={handleSelect}
          onUnselect={handleUnselect}
          onDateRangeChange={handleDateRangeChange}
          onDoubleClick={handleDoubleClick}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          taskRenderer={taskRenderer}
        />
      ) : (
        <p>No tasks to display</p>
      )}
      <ViewModeSwitcher
        onViewModeChange={handleViewModeChange}
        viewMode={viewMode}
      />
    </div>
  );
};

export default TaskGanttChart;
