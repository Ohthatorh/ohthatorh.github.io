import {
  CLEAR_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  TActionIngredients,
} from "../actions/ingredients";
import { TIngredient } from "../types/types";

interface IInitialState {
  items: Array<TIngredient>;
  itemsRequest: boolean;
  itemsFailed: boolean;
}

const initialState: IInitialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: TActionIngredients
): IInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    case CLEAR_INGREDIENTS: {
      return {
        items: [],
        itemsRequest: false,
        itemsFailed: false,
      };
    }
    default: {
      return state;
    }
  }
};
