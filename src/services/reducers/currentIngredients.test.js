import {
  CLEAR_CURRENT_INGREDIENTS,
  REMOVE_INGREDIENT,
  SET_BUN_INGREDIENT,
  SORT_INGREDIENTS,
  UPDATE_INGREDIENTS,
} from "../actions/currentIngredients";
import { currentIngredientsReducer } from "./currentIngredients";

describe("Выбранные ингредиенты", () => {
  const initialState = {
    bun: null,
    items: [],
  };

  it("Начальное состояние", () => {
    expect(currentIngredientsReducer(undefined, {})).toEqual(initialState);
  });

  it("Добавить ингредиент", () => {
    const action = {
      type: UPDATE_INGREDIENTS,
      items: [undefined],
    };

    expect(currentIngredientsReducer(initialState, action)).toEqual({
      ...initialState,
      items: action.items,
    });
  });

  it("Удалить ингредиент", () => {
    const action = {
      type: REMOVE_INGREDIENT,
      items: [],
    };

    expect(currentIngredientsReducer(initialState, action)).toEqual({
      ...initialState,
      items: action.items,
    });
  });

  it("Выбрать булочку", () => {
    const action = {
      type: SET_BUN_INGREDIENT,
      item: {},
    };

    expect(currentIngredientsReducer(initialState, action)).toEqual({
      ...initialState,
      bun: action.item,
    });
  });

  it("Сортировка ингредиентов", () => {
    const action = {
      type: SORT_INGREDIENTS,
      items: [],
    };

    expect(currentIngredientsReducer(initialState, action)).toEqual({
      ...initialState,
      items: action.items,
    });
  });

  it("Очистить ингредиенты", () => {
    const action = {
      type: CLEAR_CURRENT_INGREDIENTS,
      items: [],
      bun: null,
    };

    expect(currentIngredientsReducer(initialState, action)).toEqual({
      ...initialState,
      items: action.items,
      bun: action.bun,
    });
  });
});
