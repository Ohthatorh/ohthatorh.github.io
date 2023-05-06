import { checkResponse } from "./check-response";
const NORMA_API = "https://norma.nomoreparties.space/api";

export function getIngredients() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
    .then((res) => res);
}

export function postOrder(data) {
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
