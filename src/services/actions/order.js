import { postOrderRequest } from "../../utils/burger-api";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";

export function postOrder(data, callback) {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    });
    postOrderRequest(data).then((res) => {
      if (res && res.success) {
        dispatch({
          type: POST_ORDER_SUCCESS,
          orderId: res.order.number,
          orderName: res.name,
        });
        callback(true);
      } else {
        dispatch({
          type: POST_ORDER_FAILED,
        });
      }
    });
  };
}
