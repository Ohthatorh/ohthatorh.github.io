import { refreshTokenRequest } from "../../utils/burger-api";
import { saveTokens } from "../../utils/tokens";

export const refreshToken = (afterRefresh) => (dispatch) => {
  refreshTokenRequest().then((res) => {
    saveTokens(res.refreshToken, res.accessToken);
    dispatch(afterRefresh);
  });
};
