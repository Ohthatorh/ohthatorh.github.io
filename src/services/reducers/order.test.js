import {
  CLEAR_ORDER,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
} from "../actions/order";
import { orderReducer } from "./order";

describe("Заказ", () => {
  const initialState = {
    hasError: false,
    isPending: false,
    orderId: "",
    orderName: "",
  };

  it("Начальное состояние", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it("Запрос на оформление заказа", () => {
    const action = {
      type: POST_ORDER_REQUEST,
    };

    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it("Заказ оформлен", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };
    const action = {
      type: POST_ORDER_SUCCESS,
      orderId: 11111,
      orderName: "name",
    };

    expect(orderReducer(prevState, action)).toEqual({
      ...prevState,
      orderId: action.orderId,
      orderName: action.orderName,
      isPending: false,
    });
  });

  it("Ошибка создания заказа", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };
    const action = {
      type: POST_ORDER_FAILED,
    };

    expect(orderReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      hasError: true,
    });
  });

  it("Очистка информации о заказе", () => {
    const prevState = {
      ...initialState,
      orderId: 11111,
      orderName: "name",
    };
    const action = {
      type: CLEAR_ORDER,
    };

    expect(orderReducer(prevState, action)).toEqual({
      ...prevState,
      orderId: "",
      orderName: "",
    });
  });
});
