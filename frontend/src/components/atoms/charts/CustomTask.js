// Frontend/src/components/atoms/charts/CustomTask.js
import React from "react";

const CustomTask = ({ task, isDragging, taskProps }) => {
  const { start, end, name, progress, project } = task;

  const draggingStyle = {
    backgroundColor: "#ffc107",
    color: "#333",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  const taskStyle = {
    ...taskProps.style,
    ...(isDragging ? draggingStyle : {}),
  };

  const formattedStartDate = start.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedEndDate = end.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div {...taskProps} style={taskStyle}>
      <div>
        <span>{name}</span>
        {isDragging && (
          <div>
            <span>Start: {formattedStartDate}</span>
            <span>End: {formattedEndDate}</span>
          </div>
        )}
        <div>{project}</div>
        <div>
          Progress: <progress value={progress} max="100" />
        </div>
      </div>
    </div>
  );
};

export default CustomTask;
