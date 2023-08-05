import { SUCCESS, ERROR, SUCCESS_CLEAR, ERROR_CLEAR, CLEAR } from "./Types";

function success(message) {
  return {
    type: SUCCESS,
    message,
  };
}

function successClear() {
  return {
    type: SUCCESS_CLEAR,
  };
}

function error(message) {
  return {
    type: ERROR,
    message,
  };
}

function errorClear() {
  return {
    type: ERROR_CLEAR,
  };
}

function clear() {
  return {
    type: CLEAR,
  };
}

export const alertActions = { success, successClear, error, errorClear, clear };
