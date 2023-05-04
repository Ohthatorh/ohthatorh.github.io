import { checkResponse } from "./check-response";
const NORMA_API = "https://norma.nomoreparties.space/api";

export function getIngredients() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
    .then((res) => res);
}
