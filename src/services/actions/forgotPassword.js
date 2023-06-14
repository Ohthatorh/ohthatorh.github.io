import { sendForgotLetterRequest } from "../../utils/burger-api";

export const SEND_FORGOT_LETTER_REQUEST = "SEND_FORGOT_LETTER_REQUEST";
export const SEND_FORGOT_LETTER_SUCCESS = "SEND_FORGOT_LETTER_SUCCESS";
export const SEND_FORGOT_LETTER_FAILED = "SEND_FORGOT_LETTER_FAILED";

export function sendForgotLetter(data) {
  return function (dispatch) {
    dispatch({
      type: SEND_FORGOT_LETTER_REQUEST,
    });
    sendForgotLetterRequest(data)
      .then((res) => {
        if (res && res.success) {
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
