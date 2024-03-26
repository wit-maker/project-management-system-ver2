import * as types from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
    case types.FETCH_PROJECT_REQUEST:
    case types.CREATE_PROJECT_REQUEST:
    case types.UPDATE_PROJECT_REQUEST:
    case types.DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.FETCH_PROJECT_SUCCESS:
    case types.CREATE_PROJECT_SUCCESS:
    case types.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        data: state.data.map((project) =>
          project._id === action.payload._id ? action.payload : project
        ),
        loading: false,
        error: null,
      };
    case types.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        data: state.data.filter((project) => project._id !== action.payload),
        loading: false,
        error: null,
      };
    case types.FETCH_PROJECTS_FAILURE:
    case types.FETCH_PROJECT_FAILURE:
    case types.CREATE_PROJECT_FAILURE:
    case types.UPDATE_PROJECT_FAILURE:
    case types.DELETE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
