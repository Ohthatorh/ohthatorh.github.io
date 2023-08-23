import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { currentIngredientsReducer } from "./currentIngredients";
import { currentIngredientReducer } from "./currentIngredient";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { wsReducer } from "./wsReducers";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  user: userReducer,
  orders: wsReducer,
});
