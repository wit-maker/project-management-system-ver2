// Frontend/src/hooks/useTaskDragDrop.js
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/actions/taskActions";

const useTaskDragDrop = () => {
  const dispatch = useDispatch();
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedTaskStartDate, setDraggedTaskStartDate] = useState(null);
  const [draggedTaskEndDate, setDraggedTaskEndDate] = useState(null);

  const handleDragStart = (event, task) => {
    setDraggedTask(task);
    setDraggedTaskStartDate(task.start);
    setDraggedTaskEndDate(task.end);
  };

  const handleDrag = (event, data) => {
    if (draggedTask) {
      const startDate = new Date(draggedTaskStartDate.getTime() + data.startX);
      const endDate = new Date(draggedTaskEndDate.getTime() + data.endX);
      setDraggedTaskStartDate(startDate);
      setDraggedTaskEndDate(endDate);
    }
  };

  const handleDragEnd = (event) => {
    if (draggedTask) {
      const updatedTask = {
        ...draggedTask,
        start: draggedTaskStartDate,
        end: draggedTaskEndDate,
      };
      dispatch(updateTask(draggedTask.id, updatedTask));
      setDraggedTask(null);
      setDraggedTaskStartDate(null);
      setDraggedTaskEndDate(null);
    }
  };

  return { handleDragStart, handleDrag, handleDragEnd };
};

export default useTaskDragDrop;
