import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";
import { ingredientsReducer } from "./ingredients";

describe("Ингредиенты", () => {
  const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,
  };

  it("Начальное состояние", () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  it("Запрос ингредиентов", () => {
    const action = {
      type: GET_INGREDIENTS_REQUEST,
    };

    expect(ingredientsReducer(initialState, action)).toEqual({
      ...initialState,
      itemsRequest: true,
    });
  });

  it("Запрос ингредиентов прошёл успешно", () => {
    const prevState = {
      ...initialState,
      itemsRequest: true,
    };

    const action = {
      type: GET_INGREDIENTS_SUCCESS,
      items: [],
      itemsRequest: false,
    };

    expect(ingredientsReducer(prevState, action)).toEqual({
      ...prevState,
      items: action.items,
      itemsRequest: action.itemsRequest,
    });
  });

  it("Запрос ингредиентов завершился неудачей", () => {
    const prevState = {
      ...initialState,
      itemsRequest: true,
    };

    const action = {
      type: GET_INGREDIENTS_FAILED,
      itemsFailed: true,
      itemsRequest: false,
    };

    expect(ingredientsReducer(prevState, action)).toEqual({
      ...prevState,
      itemsFailed: action.itemsFailed,
      itemsRequest: action.itemsRequest,
    });
  });
});
