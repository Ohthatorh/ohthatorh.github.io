import {
  authRequest,
  logoutRequest,
  registerRequest,
} from "../../utils/burger-api";
import { clearTokens, saveTokens } from "../../utils/tokens";
import { AppDispatch, IData } from "../types/types";
export const AUTH_REQUEST: "AUTH_REQUEST" = "AUTH_REQUEST";
export const AUTH_SUCCESS: "AUTH_SUCCESS" = "AUTH_SUCCESS";
export const AUTH_ERROR: "AUTH_ERROR" = "AUTH_ERROR";
export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST";
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_ERROR: "REGISTER_ERROR" = "REGISTER_ERROR";
export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR: "LOGOUT_ERROR" = "LOGOUT_ERROR";

interface IAuthRequest {
  readonly type: typeof AUTH_REQUEST;
}
interface IAuthSuccess {
  readonly type: typeof AUTH_SUCCESS;
  user: IData;
}
interface IAuthFailed {
  readonly type: typeof AUTH_ERROR;
}
interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}
interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  user: IData;
}
interface IRegisterFailed {
  readonly type: typeof REGISTER_ERROR;
}
interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}
interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}
interface ILogoutFailed {
  readonly type: typeof LOGOUT_ERROR;
}
export type TActionAuth =
  | IAuthRequest
  | IAuthSuccess
  | IAuthFailed
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailed
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailed;

export function auth(data: IData) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTH_REQUEST,
    });
    authRequest(data)
      .then((res) => {
        if (res.success) {
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
export function registration(data: IData) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    registerRequest(data)
      .then((res) => {
        if (res.success) {
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
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logoutRequest()
      .then((res) => {
        if (res.success) {
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
