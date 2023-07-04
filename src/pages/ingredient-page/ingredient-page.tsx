import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientInfos from "../../components/ingredient-infos/ingredient-infos";
import { FC } from "react";
import { TIngredient } from "../../services/types/types";

export const IngredientPage: FC = () => {
  const { ingredientId } = useParams();
  const item = useSelector(
    (store: any) =>
      store.ingredients.items.filter(
        (el: TIngredient) => el._id === ingredientId
      )[0]
  );
  return <main>{item && <IngredientInfos item={item} />}</main>;
};
