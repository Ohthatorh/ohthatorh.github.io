import { ReactElement } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TActionAuth } from "../actions/auth";
import { TActionCurrentIngredient } from "../actions/currentIngredient";
import { TActionCurrentIngredients } from "../actions/currentIngredients";
import { TActionOrder } from "../actions/order";
import { TActionUser } from "../actions/user";
import { TActionResetPassword } from "../actions/resetPassword";
import { TActionForgotPassword } from "../actions/forgotPassword";
import { TActionIngredients } from "../actions/ingredients";
import { TWSActions } from "../actions/wsActions";
import { rootReducer } from "../reducers";
import { store } from "../..";
export interface IPathname {
  readonly pathname: string;
}
export type TClassnames = string;
export type TMoveCard = (dragIndex: number, hoverIndex: number) => void;
export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  __v: number;
  uniqueId?: string;
};

export interface IBurgerConstructorItem {
  item: TIngredient;
  readonly index: number;
  moveCard: TMoveCard;
}

export interface IBurgerIngredientsList {
  item: IStructureData;
  readonly index?: number;
}

export interface IStructureData {
  type: string | undefined;
  title: string;
  items: Array<TIngredient>;
}

export type TTitlesStructure = {
  [N: string]: string;
};

export interface IBurgerIngredientItem {
  item: TIngredient;
}

export interface IBurgerIngredientsWrap {
  setCurrentTab: (bun: string) => void;
}

export interface IEvent {
  target: HTMLElement;
}

export type THandleScroll = (e: IEvent) => void;

export interface IOrderDetails {
  orderId: number | string;
  onClose: () => void;
}

export interface IModal {
  children?: ReactElement;
  text?: string;
  onClose: () => void;
}

export type TTokens = (refreshToken: string, accessToken: string) => void;
export type TRequest = {
  method?: string;
  body?: string;
  authorization?: string;
  headers?: {
    "Content-Type"?: string;
    Authorization?: string;
  };
};

export interface IData {
  email?: string;
  password?: string;
  name?: string;
  token?: string;
}

export interface IResponse {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: {
    email: string;
    name: string;
    password?: string;
  };
  message?: string;
  data?: Array<TIngredient>;
  order: {
    number?: number;
  };
  name?: string;
}
export interface IOrderItem {
  _id: string;
  status: string;
  name: string;
  ingredients: Array<string>;
  createdAt: string;
  updatedAt: string;
  number: string;
}

export interface ISocketMiddleware {
  wsStart: string;
  onOpen: string;
  onClose: string;
  onError: string;
  getOrders: string;
}

type TAppActions =
  | TActionAuth
  | TActionCurrentIngredient
  | TActionCurrentIngredients
  | TActionOrder
  | TActionUser
  | TActionResetPassword
  | TActionForgotPassword
  | TActionIngredients
  | TWSActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>;
export type AppDispatch = ThunkDispatch<RootState, never, TAppActions>;
