import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../store/actions/taskActions';
import TaskListTemplate from '../templates/TaskListTemplate';

const TaskListPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.data);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return <TaskListTemplate tasks={tasks} loading={loading} error={error} />;
};

export default TaskListPage;
