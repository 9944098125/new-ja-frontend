import {
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_FAIL,
  READ_START,
  READ_SUCCESS,
  READ_FAIL,
  READ_BY_ID_START,
  READ_BY_ID_SUCCESS,
  READ_BY_ID_FAIL,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAIL,
  READ_EMPLOYER_JOBS_FAIL,
  READ_EMPLOYER_JOBS_START,
  READ_EMPLOYER_JOBS_SUCCESS,
} from "./Types";
import Api from "../Api/Api";
import { alertActions } from "./alert";

export const createJob = (body) => async (dispatch) => {
  dispatch({
    type: CREATE_START,
  });
  try {
    const res = await Api.post("/jobs/createJob", body);
    if (res) {
      dispatch({
        type: CREATE_SUCCESS,
        payload: res.data && res.data.message,
      });
      dispatch(alertActions.success(res.data.message));
      setTimeout(() => {
        dispatch(alertActions.successClear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: CREATE_FAIL,
      payload: err.response?.data.message,
    });
    dispatch(alertActions.error(err.response?.data.message));
    setTimeout(() => {
      dispatch(alertActions.errorClear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};

export const readJobs = () => async (dispatch) => {
  dispatch({
    type: READ_START,
  });
  try {
    const res = await Api.get("/jobs/readJobs");
    if (res) {
      dispatch({
        type: READ_SUCCESS,
        payload: res.data && res.data.jobs,
      });
      // console.log(res);
    }
  } catch (err) {
    dispatch({
      type: READ_FAIL,
      payload: err?.response.data.message,
    });
  }
};

export const readJobById = (jobId) => async (dispatch) => {
  dispatch({
    type: READ_BY_ID_START,
  });
  try {
    const res = await Api.get(`/jobs/readJobById/${jobId}`);
    if (res) {
      dispatch({
        type: READ_BY_ID_SUCCESS,
        payload: res.data?.job,
      });
    }
  } catch (err) {
    dispatch({
      type: READ_BY_ID_FAIL,
      payload: err.response?.data.message,
    });
  }
};

export const apply = (applied) => (dispatch) => {
  dispatch({
    type: "APPLY_START",
  });
  if (!applied) {
    dispatch({
      type: "APPLY_SUCCESS",
    });
    dispatch(alertActions.success("Applied to this Job successfully"));
    setTimeout(() => {
      dispatch(alertActions.successClear());
      dispatch(alertActions.clear());
    }, 3000);
  } else {
    dispatch({
      type: "APPLY_FAIL",
    });
    dispatch(alertActions.error("Already Applied to this Job..."));
    setTimeout(() => {
      dispatch(alertActions.errorClear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};

export const updateJob = (body, jobId, employerId) => async (dispatch) => {
  dispatch({
    type: UPDATE_START,
  });
  try {
    const res = await Api.patch(`/jobs/updateJob/${jobId}/${employerId}`, body);
    // console.log(res);
    if (res) {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data && res.data.message,
      });
      dispatch(alertActions.success(res.data?.message));
      setTimeout(() => {
        dispatch(alertActions.successClear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: UPDATE_FAIL,
      payload: err.response?.data.message,
    });
    console.log(err);
    dispatch(alertActions.error(err.response?.data.message));
    setTimeout(() => {
      dispatch(alertActions.errorClear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};

export const deleteJob = (jobId) => async (dispatch) => {
  dispatch({
    type: DELETE_START,
  });
  try {
    const res = await Api.delete(`/jobs/deleteJob/${jobId}`);
    if (res) {
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data?.message,
      });
      dispatch(alertActions.success(res.data?.message));
      setTimeout(() => {
        dispatch(alertActions.successClear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: DELETE_FAIL,
      payload: err.response?.data.message,
    });
    dispatch(alertActions.error(err.response?.data.message));
    setTimeout(() => {
      dispatch(alertActions.errorClear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};

export const readEmployerJobs = (employerId) => async (dispatch) => {
  dispatch({
    type: READ_EMPLOYER_JOBS_START,
  });
  try {
    const res = await Api.get(`/jobs/readByEmployerId/${employerId}`);
    if (res) {
      dispatch({
        type: READ_EMPLOYER_JOBS_SUCCESS,
        payload: res.data && res.data.jobs,
      });
    }
  } catch (err) {
    dispatch({
      type: READ_EMPLOYER_JOBS_FAIL,
      payload: err.response?.data.message,
    });
  }
};
