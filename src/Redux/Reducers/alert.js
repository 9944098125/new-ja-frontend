import {
  SUCCESS,
  SUCCESS_CLEAR,
  ERROR,
  ERROR_CLEAR,
  CLEAR,
} from "../Actions/Types";

export default function alert(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: "success",
        message: action.message,
      };
    case SUCCESS_CLEAR:
      return {
        type: "success_clear",
      };
    case ERROR:
      return {
        type: "error",
        message: action.message,
      };
    case ERROR_CLEAR:
      return {
        type: "error_clear",
      };
    case CLEAR:
      return {
        type: "clear",
      };
    default:
      return state;
  }
}
