import { sendResetPasswordRequest } from "../../utils/burger-api";

export const SEND_RESET_PASSWORD_REQUEST = "SEND_RESET_PASSWORD_REQUEST";
export const SEND_RESET_PASSWORD_SUCCESS = "SEND_RESET_PASSWORD_SUCCESS";
export const SEND_RESET_PASSWORD_FAILED = "SEND_RESET_PASSWORD_FAILED";

export function sendResetPassword(data) {
  return function (dispatch) {
    dispatch({
      type: SEND_RESET_PASSWORD_REQUEST,
    });
    sendResetPasswordRequest(data)
      .then((res) => {
        if (res && res.success) {
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
