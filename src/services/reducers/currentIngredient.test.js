import {
  REMOVE_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT,
} from "../actions/currentIngredient";
import { currentIngredientReducer } from "./currentIngredient";

describe("Выбранный ингредиент", () => {
  const initialState = {
    item: null,
  };

  it("Начальное состояние", () => {
    expect(currentIngredientReducer(undefined, {})).toEqual(initialState);
  });

  it("Выбрать ингредиент", () => {
    const action = {
      type: SET_CURRENT_INGREDIENT,
      item: {},
    };

    expect(currentIngredientReducer(initialState, action)).toEqual({
      ...initialState,
      item: action.item,
    });
  });

  it("Удалить ингредиент", () => {
    const action = {
      type: REMOVE_CURRENT_INGREDIENT,
      item: null,
    };

    expect(currentIngredientReducer(initialState, action)).toEqual({
      ...initialState,
      item: action.item,
    });
  });
});
