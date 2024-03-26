import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTask } from '../../store/actions/taskActions';
import TaskDetailsTemplate from '../templates/TaskDetailsTemplate';

const TaskDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.data.find((task) => task._id === id));
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  return <TaskDetailsTemplate task={task} loading={loading} error={error} />;
};

export default TaskDetailsPage;
