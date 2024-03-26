import * as types from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_REQUEST:
    case types.FETCH_TASK_REQUEST:
    case types.CREATE_TASK_REQUEST:
    case types.UPDATE_TASK_REQUEST:
    case types.DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.FETCH_TASK_SUCCESS:
    case types.CREATE_TASK_SUCCESS:
    case types.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        data: state.data.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        loading: false,
        error: null,
      };
    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        data: state.data.filter((task) => task._id !== action.payload),
        loading: false,
        error: null,
      };
    case types.FETCH_TASKS_FAILURE:
    case types.FETCH_TASK_FAILURE:
    case types.CREATE_TASK_FAILURE:
    case types.UPDATE_TASK_FAILURE:
    case types.DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
