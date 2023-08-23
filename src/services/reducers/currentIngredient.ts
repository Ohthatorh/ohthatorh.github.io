import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
  TActionCurrentIngredient,
} from "../actions/currentIngredient";
import { TIngredient } from "../types/types";

interface IInitialState {
  item: TIngredient | null;
}

const initialState: IInitialState = {
  item: null,
};

export const currentIngredientReducer = (
  state = initialState,
  action: TActionCurrentIngredient
): IInitialState => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        item: action.item,
      };
    }
    case REMOVE_CURRENT_INGREDIENT: {
      return {
        item: null,
      };
    }
    default: {
      return state;
    }
  }
};
