import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../store/actions/projectActions';
import ProjectListTemplate from '../templates/ProjectListTemplate';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ProjectListPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.data);
  const loading = useSelector((state) => state.projects.loading);
  const error = useSelector((state) => state.projects.error);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return <ProjectListTemplate projects={projects} loading={loading} error={error} />;
};

export default ProjectListPage;
