import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientInfos from "../../components/ingredient-infos/ingredient-infos";

export function IngredientPage() {
  const { ingredientId } = useParams();
  const item = useSelector(
    (store) =>
      store.ingredients.items.filter((el) => el._id === ingredientId)[0]
  );
  return <main>{item && <IngredientInfos item={item} />}</main>;
}
