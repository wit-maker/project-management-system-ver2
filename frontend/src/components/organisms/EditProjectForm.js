import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField } from "@mui/material";
import { updateProject } from "../../store/actions/projectActions";

const EditProjectForm = ({ project, onCancel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateProject(project._id, values)).then(() => {
      setSubmitting(false);
      navigate(`/projects/${project._id}`);
    });
  };

  return (
    <Formik initialValues={project} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Project Name"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Update Project
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

export default EditProjectForm;
