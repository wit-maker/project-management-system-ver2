// EditTaskForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField } from "@mui/material";
import { updateTask } from "../../store/actions/taskActions";

const EditTaskForm = ({ task, onCancel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateTask(task._id, values)).then(() => {
      setSubmitting(false);
      navigate(`/tasks/${task._id}`);
    });
  };

  return (
    <Formik initialValues={task} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Task Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            name="description"
            as={TextField}
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            name="assignee"
            as={TextField}
            label="Assignee"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Update Task
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditTaskForm;
