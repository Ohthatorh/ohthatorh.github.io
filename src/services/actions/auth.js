import {
  authRequest,
  logoutRequest,
  registerRequest,
} from "../../utils/burger-api";
import { clearTokens, saveTokens } from "../../utils/tokens";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export function auth(data) {
  return function (dispatch) {
    dispatch({
      type: AUTH_REQUEST,
    });
    authRequest(data)
      .then((res) => {
        if (res && res.success) {
          saveTokens(res.refreshToken, res.accessToken);
          dispatch({
            type: AUTH_SUCCESS,
            user: res.user,
          });
        } else {
          dispatch({
            type: AUTH_ERROR,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function registration(data) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    registerRequest(data)
      .then((res) => {
        if (res && res.success) {
          saveTokens(res.refreshToken, res.accessToken);
          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
          });
        } else {
          dispatch({
            type: REGISTER_ERROR,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function logout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logoutRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
          clearTokens();
        } else {
          dispatch({
            type: LOGOUT_ERROR,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
