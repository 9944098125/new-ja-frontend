import { combineReducers } from "redux";

import alert from "./alert";
import register from "./register";
import login from "./login";
import toggleThemeReducer from "./toggleTheme";
import jobsReducer from "./jobs";

export default combineReducers({
  alert,
  register,
  login,
  toggleThemeReducer,
  jobsReducer,
});
