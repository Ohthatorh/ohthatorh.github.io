import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  CLEAR_ORDER,
} from "../actions/order";

const initialState = {
  hasError: false,
  isPending: false,
  orderId: "",
  orderName: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        hasError: false,
        orderId: action.orderId,
        orderName: action.orderName,
        isPending: false,
      };
    }
    case POST_ORDER_FAILED: {
      return { ...state, hasError: true, isPending: false };
    }
    case CLEAR_ORDER: {
      return { hasError: false, isPending: false, orderId: "", orderName: "" };
    }
    default: {
      return state;
    }
  }
};
