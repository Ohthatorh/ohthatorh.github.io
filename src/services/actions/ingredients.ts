import { getIngredientsRequest } from "../../utils/burger-api";
import { AppDispatch, TIngredient } from "../types/types";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const CLEAR_INGREDIENTS: "CLEAR_INGREDIENTS" = "CLEAR_INGREDIENTS";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  items: Array<TIngredient>;
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetIngredientsClear {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TActionIngredients =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed
  | IGetIngredientsClear;

export function getListIngredients() {
  return async function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    await getIngredientsRequest()
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data!,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: CLEAR_INGREDIENTS,
        });
      });
  };
}
