// frontend/src/components/organisms/GanttChart.js
import React, { useState } from "react";
import "../../styles/ganttChart/ganttChart.css";

const GanttChart = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleDragStart = (event, task) => {
    setDraggedTask(task);
  };

  const handleDrag = (event, data) => {
    if (draggedTask) {
      const startX = data.startX;
      const endX = data.endX;

      let newStartTime = draggedTask.start.getTime();
      let newEndTime = draggedTask.end.getTime();

      if (data.handleType === "start") {
        newStartTime += startX;
      } else if (data.handleType === "end") {
        newEndTime += endX;
      }

      setDraggedTask({
        ...draggedTask,
        start: new Date(newStartTime),
        end: new Date(newEndTime),
      });
    }
  };

  const handleDragEnd = (event) => {
    if (draggedTask) {
      // 更新されたタスクの情報をバックエンドに送信する処理
      const updatedTask = {
        ...draggedTask,
        start: draggedTask.start,
        end: draggedTask.end,
      };
      // APIを呼び出して、updatedTaskをバックエンドに送信する

      setDraggedTask(null);
    }
  };

  const getProgressBarColor = (task) => {
    switch (task.status) {
      case "ToDo":
        return "red";
      case "In Progress":
        return "yellow";
      case "Completed":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <div className="gantt-chart">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="gantt-task"
            style={{
              left: `${task.startDate.getTime()}px`,
              width: `${task.endDate.getTime() - task.startDate.getTime()}px`,
              backgroundColor: selectedTask === task ? "lightblue" : "gray",
            }}
            onClick={() => handleTaskClick(task)}
            onDragStart={(event) => handleDragStart(event, task)}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            draggable
          >
            <div>{task.name}</div>
            <div
              className="progress-bar"
              style={{
                width: `${task.progress}%`,
                backgroundColor: getProgressBarColor(task),
                height: "5px",
                borderRadius: "2px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
