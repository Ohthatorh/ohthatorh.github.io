import {
  AUTH_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/auth";
import {
  SET_USER_DATA_FAILED,
  SET_USER_DATA_REQUEST,
  SET_USER_DATA_SUCCESS,
  USER_INFO_ERROR,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
} from "../actions/user";
import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDERS,
} from "../actions/wsActions";
import { userReducer } from "./user";

describe("Пользователь", () => {
  const initialState = {
    user: {
      name: "",
      email: "",
    },
    isPending: false,
    hasError: false,
    wsConnected: false,
    wsError: false,
    orders: null,
    total: 0,
    totalToday: 0,
  };

  it("Начальное состояние", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("Запрос на регистрацию пользователя", () => {
    const action = {
      type: REGISTER_REQUEST,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it("Регистрация пользователя прошла успешно", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: REGISTER_SUCCESS,
      user: {},
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      user: action.user,
    });
  });

  it("Ошибка регистрации", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: REGISTER_ERROR,
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      hasError: true,
    });
  });

  it("Запрос авторизации", () => {
    const action = {
      type: AUTH_REQUEST,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it("Авторизация прошла успешно", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: AUTH_SUCCESS,
      user: {},
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      user: action.user,
    });
  });

  it("Неудачная авторизация", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: AUTH_ERROR,
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      hasError: true,
    });
  });

  it("Запрос на логаут", () => {
    const action = {
      type: LOGOUT_REQUEST,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it("Логаут прошёл успешно", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: LOGOUT_SUCCESS,
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      user: {
        name: "",
        email: "",
      },
    });
  });

  it("Логаут закончился ошибкой", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: LOGOUT_ERROR,
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      hasError: true,
    });
  });

  it("Запрос данных пользователя", () => {
    const action = {
      type: USER_INFO_REQUEST,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it("Данные пользователя получены", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: USER_INFO_SUCCESS,
      user: {},
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      user: action.user,
    });
  });

  it("Получение данных о пользователе завершились ошибкой", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: USER_INFO_ERROR,
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      hasError: true,
    });
  });

  it("Запрос изменений данных пользователя", () => {
    const action = {
      type: SET_USER_DATA_REQUEST,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  it("Данные пользователя изменены", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: SET_USER_DATA_SUCCESS,
      user: {},
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      user: action.user,
    });
  });

  it("Изменение данных о пользователе завершились ошибкой", () => {
    const prevState = {
      ...initialState,
      isPending: true,
    };

    const action = {
      type: SET_USER_DATA_FAILED,
    };

    expect(userReducer(prevState, action)).toEqual({
      ...prevState,
      isPending: false,
      hasError: true,
    });
  });

  it("WS соединение успешно", () => {
    const action = {
      type: WS_USER_CONNECTION_SUCCESS,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("WS соединение завершилось с ошибкой", () => {
    const action = {
      type: WS_USER_CONNECTION_ERROR,
      message: "",
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: false,
      wsError: action.message,
    });
  });

  it("WS соединение закрыто", () => {
    const action = {
      type: WS_USER_CONNECTION_CLOSED,
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: false,
      orders: null,
    });
  });

  it("WS заказы пользователя получены", () => {
    const action = {
      type: WS_USER_GET_ORDERS,
      payload: {
        orders: 0,
        total: 0,
        totalToday: 0,
      },
    };

    expect(userReducer(initialState, action)).toEqual({
      ...initialState,
      orders: action.payload.orders,
      total: action.payload.total,
      totalToday: action.payload.totalToday,
    });
  });
});
