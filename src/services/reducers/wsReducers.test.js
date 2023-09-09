import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from "../actions/wsActions";
import { wsReducer } from "./wsReducers";

describe("Лента заказов", () => {
  const initialState = {
    wsConnected: false,
    wsError: false,
    orders: [],
    total: 0,
    totalToday: 0,
  };

  it("Начальное состояние", () => {
    expect(wsReducer(undefined, {})).toEqual(initialState);
  });

  it("WS соединение успешно", () => {
    const action = {
      type: WS_CONNECTION_SUCCESS,
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("WS соединение завершилось с ошибкой", () => {
    const action = {
      type: WS_CONNECTION_ERROR,
      message: "",
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: false,
      wsError: action.message,
    });
  });

  it("WS соединение закрыто", () => {
    const action = {
      type: WS_CONNECTION_CLOSED,
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: false,
      orders: null,
    });
  });

  it("WS заказы получены", () => {
    const action = {
      type: WS_GET_ORDERS,
      payload: {
        orders: 0,
        total: 0,
        totalToday: 0,
      },
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      orders: action.payload.orders,
      total: action.payload.total,
      totalToday: action.payload.totalToday,
    });
  });
});
