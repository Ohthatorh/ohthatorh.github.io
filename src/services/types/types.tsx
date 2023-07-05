import { ReactElement } from "react";
export interface IPathname {
  readonly pathname: string;
}
export type TClassnames = string;
export type TBoolean = true | false;
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
  title: string;
  items: Array<TIngredient>;
}

export type TTitlesStructure = {
  [N: string]: string;
};

export type TIngredientWithUnique = TIngredient & { uniqueId: string };

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
  orderId: number;
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
  email: string;
  password: string;
  name: string;
  token: string;
}
