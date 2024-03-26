import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import { createTask } from "../../store/actions/taskActions";

const NewTaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.data);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(createTask(values)).then(() => {
      setSubmitting(false);
      navigate("/tasks");
    });
  };

  return (
    <Formik
      initialValues={{ name: "", description: "", assignee: "", projectId: "" }}
      onSubmit={handleSubmit}
    >
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
          <Field
            name="projectId"
            as={Select}
            label="Project"
            variant="outlined"
            fullWidth
            margin="normal"
          >
            {projects.map((project) => (
              <MenuItem key={project._id} value={project._id}>
                {project.name}
              </MenuItem>
            ))}
          </Field>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Create Task
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewTaskForm;
