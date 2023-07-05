import { TRequest } from "../services/types/types";
import { checkResponse } from "./check-response";
import { checkSuccess } from "./check-success";
const NORMA_API = "https://norma.nomoreparties.space/api";

export function request(endpoint: string, options?: TRequest) {
  return fetch(NORMA_API + endpoint, options)
    .then(checkResponse)
    .then(checkSuccess);
}
