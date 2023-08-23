import { sendResetPasswordRequest } from "../../utils/burger-api";
import { AppDispatch, IData } from "../types/types";

export const SEND_RESET_PASSWORD_REQUEST: "SEND_RESET_PASSWORD_REQUEST" =
  "SEND_RESET_PASSWORD_REQUEST";
export const SEND_RESET_PASSWORD_SUCCESS: "SEND_RESET_PASSWORD_SUCCESS" =
  "SEND_RESET_PASSWORD_SUCCESS";
export const SEND_RESET_PASSWORD_FAILED: "SEND_RESET_PASSWORD_FAILED" =
  "SEND_RESET_PASSWORD_FAILED";

export interface ISendResetPasswordRequest {
  readonly type: typeof SEND_RESET_PASSWORD_REQUEST;
}

export interface ISendResetPasswordSuccess {
  readonly type: typeof SEND_RESET_PASSWORD_SUCCESS;
}

export interface ISendResetPasswordFailed {
  readonly type: typeof SEND_RESET_PASSWORD_FAILED;
}

export type TActionResetPassword =
  | ISendResetPasswordRequest
  | ISendResetPasswordSuccess
  | ISendResetPasswordFailed;

export function sendResetPassword(data: IData) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: SEND_RESET_PASSWORD_REQUEST,
    });
    sendResetPasswordRequest(data)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: SEND_RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: SEND_RESET_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
