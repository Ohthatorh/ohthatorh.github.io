import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IngredientInfos from "../ingredient-infos/ingredient-infos";

function IngredientDetails() {
  const [item, setItem] = useState({ image_mobile: "", image: "", name: "" });
  const { ingredientId } = useParams();
  const burgerIngredientsList = useSelector((store) => store.ingredients.items);
  useEffect(() => {
    if (burgerIngredientsList.length) {
      setItem(
        burgerIngredientsList.filter(
          (ingredient) => ingredient._id === ingredientId
        )[0]
      );
    }
  }, [burgerIngredientsList]);

  return <IngredientInfos item={item} />;
}

export default IngredientDetails;
