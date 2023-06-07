import { checkResponse } from "./check-response";
import { getCookie } from "./cookie";
const NORMA_API = "https://norma.nomoreparties.space/api";

export function getIngredientsRequest() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
    .then((res) => res);
}

export function postOrderRequest(data) {
  return fetch(`${NORMA_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export function sendForgotLetterRequest(data) {
  return fetch(`${NORMA_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export function sendResetPasswordRequest(data) {
  return fetch(`${NORMA_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: data.password,
      token: data.token,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export async function authRequest(data) {
  return await fetch(`${NORMA_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export async function registerRequest(data) {
  return await fetch(`${NORMA_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export function logoutRequest() {
  return fetch(`${NORMA_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export function refreshTokenRequest() {
  return fetch(`${NORMA_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse)
    .then((res) => res);
}

export async function getUserInfoRequest() {
  const token = getCookie("accessToken");
  if (token) {
    return await fetch(`${NORMA_API}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(checkResponse)
      .then((res) => res);
  }
}

export function setUserDataRequest(data) {
  const token = getCookie("accessToken");
  return fetch(`${NORMA_API}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then(checkResponse)
    .then((res) => res);
}
