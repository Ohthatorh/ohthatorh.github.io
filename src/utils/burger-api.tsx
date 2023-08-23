import { IData, TIngredient } from "../services/types/types";
import { getCookie } from "./cookie";
import { request } from "./request";

export function getIngredientsRequest() {
  return request("/ingredients");
}

export function postOrderRequest(data: Array<TIngredient> | string[]) {
  const token = getCookie("accessToken");
  return request("/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  });
}

export function sendForgotLetterRequest(data: IData) {
  return request("/password-reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
    }),
  });
}

export function sendResetPasswordRequest(data: IData) {
  return request("/password-reset/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: data.password,
      token: data.token,
    }),
  });
}

export function authRequest(data: IData) {
  return request("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
    }),
  });
}

export function registerRequest(data: IData) {
  return request("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
    }),
  });
}

export function logoutRequest() {
  return request("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
}

export function refreshTokenRequest() {
  return request("/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
}

export function getUserInfoRequest() {
  const token = getCookie("accessToken");
  return request("/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

export function setUserDataRequest(data: IData) {
  const token = getCookie("accessToken");
  return request("/auth/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
}
