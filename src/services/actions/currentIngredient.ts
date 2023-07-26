import { TIngredient } from "../types/types";

export const SET_CURRENT_INGREDIENT: "SET_CURRENT_INGREDIENT" =
  "SET_CURRENT_INGREDIENT";
export const REMOVE_CURRENT_INGREDIENT: "REMOVE_CURRENT_INGREDIENT" =
  "REMOVE_CURRENT_INGREDIENT";

export interface ISetCurrentIngredient {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  item: TIngredient;
}

export interface IRemoveCurrentIngredient {
  readonly type: typeof REMOVE_CURRENT_INGREDIENT;
  item?: TIngredient;
}

export type TActionCurrentIngredient =
  | ISetCurrentIngredient
  | IRemoveCurrentIngredient;
