import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import IngredientInfos from "../ingredient-infos/ingredient-infos";
import { TIngredient } from "../../services/types/types";
import { useAppSelector } from "../../services/hooks/hooks";

const IngredientDetails: FC = () => {
  const [item, setItem] = useState({
    image_mobile: "",
    image: "",
    name: "",
  }) as any;
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
    }
  }, [burgerIngredientsList]);

  // return item.name && <IngredientInfos item={item} />;

  return <IngredientInfos item={item} />;
};

export default IngredientDetails;
