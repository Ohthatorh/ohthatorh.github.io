import { TIngredient } from "../types/types";

export const UPDATE_INGREDIENTS: "UPDATE_INGREDIENTS" = "UPDATE_INGREDIENTS";
export const REMOVE_INGREDIENT: "REMOVE_INGREDIENT" = "REMOVE_INGREDIENT";
export const SET_BUN_INGREDIENT: "SET_BUN_INGREDIENT" = "SET_BUN_INGREDIENT";
export const SORT_INGREDIENTS: "SORT_INGREDIENTS" = "SORT_INGREDIENTS";
export const CLEAR_CURRENT_INGREDIENTS: "CLEAR_CURRENT_INGREDIENTS" =
  "CLEAR_CURRENT_INGREDIENTS";

export interface IUpdateIngredients {
  readonly type: typeof UPDATE_INGREDIENTS;
  item: TIngredient;
}

export interface IRemoveIngredients {
  readonly type: typeof REMOVE_INGREDIENT;
  item: TIngredient;
  index: number;
}

export interface ISetBunIngredients {
  readonly type: typeof SET_BUN_INGREDIENT;
  item: TIngredient;
}

export interface ISortIngredients {
  readonly type: typeof SORT_INGREDIENTS;
  items: Array<TIngredient>;
}

export interface IClearCurrentIngredients {
  readonly type: typeof CLEAR_CURRENT_INGREDIENTS;
}

export type TActionCurrentIngredients =
  | IUpdateIngredients
  | IRemoveIngredients
  | ISetBunIngredients
  | ISortIngredients
  | IClearCurrentIngredients;
