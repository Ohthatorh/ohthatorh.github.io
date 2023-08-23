import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import IngredientInfos from "../ingredient-infos/ingredient-infos";
import { TIngredient } from "../../services/types/types";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { SET_CURRENT_INGREDIENT } from "../../services/actions/currentIngredient";

const IngredientDetails: FC = () => {
  const dispatch = useAppDispatch();
  const [item, setItem] = useState<TIngredient | any>({});
  const { ingredientId } = useParams();
  const burgerIngredientsList = useAppSelector(
    (store) => store.ingredients.items
  );
  useEffect(() => {
    if (burgerIngredientsList.length) {
      setItem(
        burgerIngredientsList.filter(
          (ingredient: TIngredient) => ingredient._id === ingredientId
        )[0]
      );
      dispatch({
        type: SET_CURRENT_INGREDIENT,
        item,
      });
    }
  }, [burgerIngredientsList]);

  return item.name && <IngredientInfos item={item} />;
};

export default IngredientDetails;
