import { sendForgotLetterRequest } from "../../utils/burger-api";
import { AppDispatch, IData } from "../types/types";

export const SEND_FORGOT_LETTER_REQUEST: "SEND_FORGOT_LETTER_REQUEST" =
  "SEND_FORGOT_LETTER_REQUEST";
export const SEND_FORGOT_LETTER_SUCCESS: "SEND_FORGOT_LETTER_SUCCESS" =
  "SEND_FORGOT_LETTER_SUCCESS";
export const SEND_FORGOT_LETTER_FAILED: "SEND_FORGOT_LETTER_FAILED" =
  "SEND_FORGOT_LETTER_FAILED";

export interface ISendForgotPasswordRequest {
  readonly type: typeof SEND_FORGOT_LETTER_REQUEST;
}

export interface ISendForgotPasswordSuccess {
  readonly type: typeof SEND_FORGOT_LETTER_SUCCESS;
}

export interface ISendForgotPasswordFailed {
  readonly type: typeof SEND_FORGOT_LETTER_FAILED;
}

export type TActionForgotPassword =
  | ISendForgotPasswordRequest
  | ISendForgotPasswordSuccess
  | ISendForgotPasswordFailed;

export function sendForgotLetter(data: IData) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: SEND_FORGOT_LETTER_REQUEST,
    });
    sendForgotLetterRequest(data)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: SEND_FORGOT_LETTER_SUCCESS,
            message: res.message,
          });
        } else {
          dispatch({
            type: SEND_FORGOT_LETTER_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
