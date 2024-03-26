import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProject } from '../../store/actions/projectActions';
import { fetchTasks } from '../../store/actions/taskActions';
import ProjectDetailsTemplate from '../templates/ProjectDetailsTemplate';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.data.find((project) => project._id === id));
  const tasks = useSelector((state) => state.tasks.data.filter((task) => task.projectId === id));
  const loading = useSelector((state) => state.projects.loading || state.tasks.loading);
  const error = useSelector((state) => state.projects.error || state.tasks.error);

  useEffect(() => {
    dispatch(fetchProject(id));
    dispatch(fetchTasks(id));
  }, [dispatch, id]);

  return <ProjectDetailsTemplate project={project} tasks={tasks} loading={loading} error={error} />;
};

export default ProjectDetailsPage;
