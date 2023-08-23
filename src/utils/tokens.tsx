import { TTokens } from "../services/types/types";
import { removeCookie, setCookie } from "./cookie";

export const saveTokens: TTokens = (refreshToken, accessToken) => {
  setCookie("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const clearTokens = () => {
  removeCookie("accessToken");
  localStorage.removeItem("refreshToken");
};
