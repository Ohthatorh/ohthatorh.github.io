import { postOrderRequest } from "../../utils/burger-api";
import { CLEAR_CURRENT_INGREDIENTS } from "./currentIngredients";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";
export const CLEAR_ORDER = "CLEAR_ORDER";

export function postOrder(data, showModal) {
  return function (dispatch) {
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
          showModal(true);
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
