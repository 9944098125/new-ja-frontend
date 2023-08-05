import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/Types";

const initialState = {
  loading: false,
  token: localStorage.getItem("jobsToken"),
  user: null,
  errMessage: "",
  isAuthenticated: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("jobsToken", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("isAuthenticatedToJobsApp", true);
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case LOGOUT:
      localStorage.removeItem("jobsToken");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticatedToJobsApp");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}
