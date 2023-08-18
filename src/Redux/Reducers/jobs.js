import {
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_FAIL,
  READ_START,
  READ_SUCCESS,
  READ_FAIL,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAIL,
  READ_EMPLOYER_JOBS_START,
  READ_EMPLOYER_JOBS_SUCCESS,
  READ_EMPLOYER_JOBS_FAIL,
  READ_BY_ID_START,
  READ_BY_ID_SUCCESS,
  READ_BY_ID_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
  jobs: [],
  postedJobs: [],
  successMessage: "",
  failMessage: "",
  job: null,
};

export default function jobsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case READ_START:
      return {
        ...state,
        loading: true,
      };
    case READ_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: payload,
      };
    case READ_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    case READ_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case READ_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        job: payload,
      };
    case READ_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    case READ_EMPLOYER_JOBS_START:
      return {
        ...state,
        loading: true,
      };
    case READ_EMPLOYER_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        postedJobs: payload,
      };
    case READ_EMPLOYER_JOBS_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    default:
      return state;
  }
}
