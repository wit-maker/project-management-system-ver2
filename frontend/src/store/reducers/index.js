import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
  users: userReducer,
});

export default rootReducer;
