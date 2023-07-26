import {
  REMOVE_INGREDIENT,
  SET_BUN_INGREDIENT,
  UPDATE_INGREDIENTS,
  SORT_INGREDIENTS,
  CLEAR_CURRENT_INGREDIENTS,
  TActionCurrentIngredients,
} from "../actions/currentIngredients";
import { TIngredient } from "../types/types";
import { AnyAction } from "redux";

interface IInitialState {
  bun: TIngredient | null;
  items: Array<TIngredient> | [];
}

const initialState: IInitialState = {
  bun: null,
  items: [],
};

export const currentIngredientsReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case UPDATE_INGREDIENTS: {
      return {
        ...state,
        items: [...state.items, action.item],
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.index),
      };
    }
    case SET_BUN_INGREDIENT: {
      return {
        ...state,
        bun: action.item,
      };
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        items: action.items,
      };
    }
    case CLEAR_CURRENT_INGREDIENTS: {
      return {
        bun: null,
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};
