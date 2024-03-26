import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, CircularProgress } from "@mui/material";
import CommentList from "../molecules/CommentList";
import { deleteTask } from "../../store/actions/taskActions";
import EditTaskForm from "../organisms/EditTaskForm";

const TaskDetailsTemplate = ({ task, loading, error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const handleDeleteTask = () => {
    dispatch(deleteTask(task._id)).then(() => {
      navigate("/tasks");
    });
  };

  const handleEditTask = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };
  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error.message}
        </Typography>
      </Container>
    );
  }

  if (!task) {
    return (
      <Container>
        <Typography variant="h6">Task not found</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Comments
      </Typography>
      {task.comments && task.comments.length > 0 ? (
        <CommentList comments={task.comments} />
      ) : (
        <Typography variant="body1">No comments yet.</Typography>
      )}
      {editing ? (
        <EditTaskForm task={task} onCancel={handleCancelEdit} />
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditTask}
            sx={{ mr: 2 }}
          >
            Edit Task
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteTask}
          >
            Delete Task
          </Button>
        </>
      )}
    </Container>
  );
};

export default TaskDetailsTemplate;
