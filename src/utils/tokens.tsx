import { TTokens } from "../services/types/types";
import { setCookie } from "./cookie";

export const saveTokens: TTokens = (refreshToken, accessToken) => {
  setCookie("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const clearTokens = () => {
  setCookie("accessToken", "");
  localStorage.setItem("refreshToken", "");
};
