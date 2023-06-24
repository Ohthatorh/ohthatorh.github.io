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
} from "../actions/auth";
import {
  SET_USER_DATA_FAILED,
  SET_USER_DATA_REQUEST,
  SET_USER_DATA_SUCCESS,
  USER_INFO_ERROR,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
} from "../actions/user";

const initialState = {
  user: {},
  isPending: false,
  hasError: false,
};

export const userReducer = (state = initialState, action) => {
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
    default: {
      return state;
    }
  }
};
