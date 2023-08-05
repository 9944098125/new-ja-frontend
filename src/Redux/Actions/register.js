import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./Types";
import Api from "../Api/Api";
import { alertActions } from "./alert";

export const register = (body) => async (dispatch) => {
  dispatch({
    type: REGISTER_START,
  });
  try {
    const res = await Api.post("/auth/register", body);
    if (res) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data?.message,
      });
      // console.log(res);
      dispatch(alertActions.success(res.data?.message));
      setTimeout(() => {
        dispatch(alertActions.successClear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err?.response.data.message,
    });
    console.log(err);
    dispatch(alertActions.error(err?.response.data.message));
    setTimeout(() => {
      dispatch(alertActions.errorClear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
