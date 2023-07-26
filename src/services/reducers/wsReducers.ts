import { AnyAction } from "redux";

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/wsActions";
import { IOrderItem } from "../types/types";

interface IInitialState {
  wsConnected: boolean;
  wsError: boolean;
  orders: Array<IOrderItem> | null;
  total: number;
  totalToday: number;
}

const initialState: IInitialState = {
  wsConnected: false,
  wsError: false,
  orders: null,
  total: 0,
  totalToday: 0,
};
export const wsReducer = (
  state = initialState,
  action: AnyAction
): IInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsError: false,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsError: action.message,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsError: false,
        wsConnected: false,
        orders: null,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        wsError: false,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
