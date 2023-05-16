import {
  REMOVE_INGREDIENT,
  SET_BUN_INGREDIENT,
  UPDATE_INGREDIENTS,
} from "../actions/currentIngredients";

const initialState = {
  items: [
    {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
  ],
};

export const currentIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INGREDIENTS: {
      return {
        items: [...state.items, action.item],
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        items: state.items.filter((item) => item._id !== action.id),
      };
    }
    case SET_BUN_INGREDIENT: {
      return {
        items: state.items.map((item) =>
          item.type === "bun" ? action.item : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
