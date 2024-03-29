// Frontend/src/components/atoms/inputs/ViewModeSwitcher.js
import React from "react";
import { ViewMode } from "gantt-task-react";

const ViewModeSwitcher = ({ viewMode, onViewModeChange }) => {
  const handleViewModeChange = (newViewMode) => {
    onViewModeChange(newViewMode);
  };

  return (
    <div>
      <button onClick={() => handleViewModeChange(ViewMode.Day)}>Day</button>
      <button onClick={() => handleViewModeChange(ViewMode.Week)}>Week</button>
      <button onClick={() => handleViewModeChange(ViewMode.Month)}>
        Month
      </button>
    </div>
  );
};

export default ViewModeSwitcher;
