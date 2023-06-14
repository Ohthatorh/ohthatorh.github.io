import { getUserInfoRequest, setUserDataRequest } from "../../utils/burger-api";
import { refreshToken } from "./token";

export const USER_INFO_REQUEST = "USER_INFO_REQUEST";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_ERROR = "USER_INFO_ERROR";

export const SET_USER_DATA_REQUEST = "SET_USER_DATA_REQUEST";
export const SET_USER_DATA_SUCCESS = "SET_USER_DATA_SUCCESS";
export const SET_USER_DATA_FAILED = "SET_USER_DATA_FAILED";

export function getUserInfo() {
  return function (dispatch) {
    dispatch({
      type: USER_INFO_REQUEST,
    });
    getUserInfoRequest()
      .then((res) => {
        dispatch({
          type: USER_INFO_SUCCESS,
          user: res.user,
        });
      })
      .then((res) => res)
      .catch((err) => {
        if (err.message === "You should be authorised") return;
        if (err.message === "jwt expired") {
          dispatch(refreshToken(getUserInfo()));
        } else {
          dispatch({
            type: USER_INFO_ERROR,
          });
        }
      });
  };
}

export function setUserData(data) {
  return function (dispatch) {
    dispatch({
      type: SET_USER_DATA_REQUEST,
    });
    setUserDataRequest(data).then((res) => {
      if (res && res.success) {
        dispatch({
          type: SET_USER_DATA_SUCCESS,
          user: res.user,
        });
      } else {
        dispatch({
          type: SET_USER_DATA_FAILED,
        });
      }
    });
  };
}
