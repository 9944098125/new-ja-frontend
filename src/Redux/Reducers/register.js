import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
  successMessage: "",
  errMessage: "",
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
}
