import { IOrderItem } from "../types/types";

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS: "WS_GET_ORDERS" = "WS_GET_ORDERS";

export const WS_USER_CONNECTION_START: "WS_USER_CONNECTION_START" =
  "WS_USER_CONNECTION_START";
export const WS_USER_CONNECTION_SUCCESS: "WS_USER_CONNECTION_SUCCESS" =
  "WS_USER_CONNECTION_SUCCESS";
export const WS_USER_CONNECTION_ERROR: "WS_USER_CONNECTION_ERROR" =
  "WS_USER_CONNECTION_ERROR";
export const WS_USER_CONNECTION_CLOSED: "WS_USER_CONNECTION_CLOSED" =
  "WS_USER_CONNECTION_CLOSED";

export const WS_USER_GET_ORDERS: "WS_USER_GET_ORDERS" = "WS_USER_GET_ORDERS";

export interface IWSConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}
export interface IWSConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWSConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  message: boolean;
}
export interface IWSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWSGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: { orders: Array<IOrderItem>; total: number; totalToday: number };
}

export interface IWSUserConnectionStart {
  readonly type: typeof WS_USER_CONNECTION_START;
}
export interface IWSUserConnectionSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS;
}
export interface IWSUserConnectionError {
  readonly type: typeof WS_USER_CONNECTION_ERROR;
  message: boolean;
}
export interface IWSUserConnectionClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED;
}
export interface IWSUserGetOrders {
  readonly type: typeof WS_USER_GET_ORDERS;
  payload: { orders: Array<IOrderItem>; total: number; totalToday: number };
}

export type TWSActions =
  | IWSConnectionStart
  | IWSConnectionSuccess
  | IWSConnectionError
  | IWSConnectionClosed
  | IWSGetOrders
  | IWSUserConnectionStart
  | IWSUserConnectionSuccess
  | IWSUserConnectionError
  | IWSUserConnectionClosed
  | IWSUserGetOrders;
