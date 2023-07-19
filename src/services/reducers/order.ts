import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  CLEAR_ORDER,
  TActionOrder,
} from "../actions/order";

interface IInitialState {
  hasError: boolean;
  isPending: boolean;
  orderId: number | "";
  orderName: string | "";
}

const initialState: IInitialState = {
  hasError: false,
  isPending: false,
  orderId: "",
  orderName: "",
};

export const orderReducer = (state = initialState, action: TActionOrder) => {
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
