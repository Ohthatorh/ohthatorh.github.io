import { SetStateAction } from "react";
import { postOrderRequest } from "../../utils/burger-api";
import { AppDispatch, IData, TIngredient } from "../types/types";
import { CLEAR_CURRENT_INGREDIENTS } from "./currentIngredients";

export const POST_ORDER_REQUEST: "POST_ORDER_REQUEST" = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS: "POST_ORDER_SUCCESS" = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED: "POST_ORDER_FAILED" = "POST_ORDER_FAILED";
export const CLEAR_ORDER: "CLEAR_ORDER" = "CLEAR_ORDER";

export interface IPostOrderRequest {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderSuccess {
  readonly type: typeof POST_ORDER_SUCCESS;
  orderId: number | undefined;
  orderName: string | undefined;
}

export interface IPostOrderFailed {
  readonly type: typeof POST_ORDER_FAILED;
}

export interface IClearOrder {
  readonly type: typeof CLEAR_ORDER;
}

export type TActionOrder =
  | IPostOrderRequest
  | IPostOrderSuccess
  | IPostOrderFailed
  | IClearOrder;

export function postOrder(
  data: Array<TIngredient> | string[],
  showModal: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) {
  return function (dispatch: AppDispatch) {
    showModal(true);
    dispatch({
      type: POST_ORDER_REQUEST,
    });
    postOrderRequest(data)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: POST_ORDER_SUCCESS,
            orderId: res.order.number,
            orderName: res.name,
          });
          dispatch({
            type: CLEAR_CURRENT_INGREDIENTS,
          });
        } else {
          dispatch({
            type: POST_ORDER_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: CLEAR_ORDER,
        });
      });
  };
}
