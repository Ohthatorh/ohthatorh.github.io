import { refreshTokenRequest } from "../../utils/burger-api";
import { saveTokens } from "../../utils/tokens";
import { AppDispatch } from "../types/types";

export const refreshToken =
  (afterRefresh: {
    (dispatch: AppDispatch): void;
    (dispatch: AppDispatch): void;
  }) =>
  (dispatch: AppDispatch) => {
    refreshTokenRequest()
      .then((res) => {
        saveTokens(res.refreshToken, res.accessToken);
        dispatch(afterRefresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };
