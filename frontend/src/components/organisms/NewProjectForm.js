import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField } from "@mui/material";
import { createProject } from "../../store/actions/projectActions";

const NewProjectForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(createProject(values)).then(() => {
      setSubmitting(false);
      navigate("/");
    });
  };

  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      onSubmit={handleSubmit}
    >
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
            Create Project
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewProjectForm;
