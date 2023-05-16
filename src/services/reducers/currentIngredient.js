import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from "../actions/currentIngredient";

export const currentIngredientReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        item: action.item,
      };
    }
    case REMOVE_CURRENT_INGREDIENT: {
      return {
        item: {},
      };
    }
    default: {
      return state;
    }
  }
};
