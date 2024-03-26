import * as types from "../types";
import * as projectService from "../../services/projectService";

export const fetchProjects = () => async (dispatch) => {
  dispatch({ type: types.FETCH_PROJECTS_REQUEST });
  try {
    const projects = await projectService.getProjects();
    dispatch({ type: types.FETCH_PROJECTS_SUCCESS, payload: projects });
  } catch (error) {
    dispatch({
      type: types.FETCH_PROJECTS_FAILURE,
      payload: error.response.data,
    });
  }
};

export const fetchProject = (id) => async (dispatch) => {
  dispatch({ type: types.FETCH_PROJECT_REQUEST });
  try {
    const project = await projectService.getProject(id);
    dispatch({ type: types.FETCH_PROJECT_SUCCESS, payload: project });
  } catch (error) {
    dispatch({
      type: types.FETCH_PROJECT_FAILURE,
      payload: error.response.data,
    });
  }
};

export const createProject = (project) => async (dispatch) => {
  dispatch({ type: types.CREATE_PROJECT_REQUEST });
  try {
    const newProject = await projectService.createProject(project);
    dispatch({ type: types.CREATE_PROJECT_SUCCESS, payload: newProject });
  } catch (error) {
    dispatch({
      type: types.CREATE_PROJECT_FAILURE,
      payload: error.response.data,
    });
  }
};

export const updateProject = (id, project) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PROJECT_REQUEST });
  try {
    const updatedProject = await projectService.updateProject(id, project);
    dispatch({ type: types.UPDATE_PROJECT_SUCCESS, payload: updatedProject });
  } catch (error) {
    dispatch({
      type: types.UPDATE_PROJECT_FAILURE,
      payload: error.response.data,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_PROJECT_REQUEST });
  try {
    await projectService.deleteProject(id);
    dispatch({ type: types.DELETE_PROJECT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: types.DELETE_PROJECT_FAILURE,
      payload: error.response.data,
    });
  }
};
