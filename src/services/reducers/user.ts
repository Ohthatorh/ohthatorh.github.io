import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  TActionAuth,
} from "../actions/auth";
import {
  SET_USER_DATA_FAILED,
  SET_USER_DATA_REQUEST,
  SET_USER_DATA_SUCCESS,
  TActionUser,
  USER_INFO_ERROR,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
} from "../actions/user";
import {
  TWSActions,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDERS,
} from "../actions/wsActions";
import { IData, IOrderItem } from "../types/types";

interface IInitialState {
  user: IData | {};
  isPending: boolean;
  hasError: boolean;
  wsConnected: boolean;
  wsError: boolean;
  orders: Array<IOrderItem> | null;
  total: number;
  totalToday: number;
}

const initialState: IInitialState = {
  user: {},
  isPending: false,
  hasError: false,
  wsConnected: false,
  wsError: false,
  orders: null,
  total: 0,
  totalToday: 0,
};

export const userReducer = (
  state = initialState,
  action: TActionAuth | TActionUser | TWSActions
) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hasError: false,
        user: action.user,
      };
    }
    case REGISTER_ERROR: {
      return { ...state, hasError: true, isPending: false };
    }
    case AUTH_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hasError: false,
        user: action.user,
      };
    }
    case AUTH_ERROR: {
      return { ...state, hasError: true, isPending: false };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hasError: false,
        user: {},
      };
    }
    case LOGOUT_ERROR: {
      return { ...state, hasError: true, isPending: false };
    }
    case USER_INFO_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case USER_INFO_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hasError: false,
        user: action.user,
      };
    }
    case USER_INFO_ERROR: {
      return { ...state, hasError: true, isPending: false };
    }
    case SET_USER_DATA_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case SET_USER_DATA_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hasError: false,
        user: action.user,
      };
    }
    case SET_USER_DATA_FAILED: {
      return { ...state, hasError: true, isPending: false };
    }
    case WS_USER_CONNECTION_SUCCESS:
      return {
        ...state,
        wsError: false,
        wsConnected: true,
      };
    case WS_USER_CONNECTION_ERROR:
      return {
        ...state,
        wsError: action.message,
        wsConnected: false,
      };
    case WS_USER_CONNECTION_CLOSED:
      return {
        ...state,
        wsError: false,
        wsConnected: false,
        orders: null,
      };
    case WS_USER_GET_ORDERS:
      return {
        ...state,
        wsError: false,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default: {
      return state;
    }
  }
};
