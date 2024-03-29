import * as types from "../types";
import * as userService from "../../services/userService";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: types.FETCH_USERS_REQUEST });
  try {
    const users = await userService.getUsers();
    dispatch({ type: types.FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: types.FETCH_USERS_FAILURE, payload: error.message });
  }
};
