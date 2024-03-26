import * as types from "../types";
import * as taskService from "../../services/taskService";

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: types.FETCH_TASKS_REQUEST });
  try {
    const tasks = await taskService.getTasks();
    dispatch({ type: types.FETCH_TASKS_SUCCESS, payload: tasks });
  } catch (error) {
    dispatch({ type: types.FETCH_TASKS_FAILURE, payload: error.response.data });
  }
};

export const fetchTask = (id) => async (dispatch) => {
  dispatch({ type: types.FETCH_TASK_REQUEST });
  try {
    const task = await taskService.getTask(id);
    dispatch({ type: types.FETCH_TASK_SUCCESS, payload: task });
  } catch (error) {
    dispatch({ type: types.FETCH_TASK_FAILURE, payload: error.response.data });
  }
};

export const createTask = (task) => async (dispatch) => {
  dispatch({ type: types.CREATE_TASK_REQUEST });
  try {
    const newTask = await taskService.createTask(task);
    dispatch({ type: types.CREATE_TASK_SUCCESS, payload: newTask });
  } catch (error) {
    dispatch({ type: types.CREATE_TASK_FAILURE, payload: error.response.data });
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  dispatch({ type: types.UPDATE_TASK_REQUEST });
  try {
    const updatedTask = await taskService.updateTask(id, task);
    dispatch({ type: types.UPDATE_TASK_SUCCESS, payload: updatedTask });
  } catch (error) {
    dispatch({ type: types.UPDATE_TASK_FAILURE, payload: error.response.data });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_TASK_REQUEST });
  try {
    await taskService.deleteTask(id);
    dispatch({ type: types.DELETE_TASK_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.DELETE_TASK_FAILURE, payload: error.response.data });
  }
};
