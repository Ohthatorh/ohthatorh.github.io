import BurgerIngredientsWrap from "./burger-ingredients-wrap/burger-ingredients-wrap";
import { FC } from "react";

const BurgerIngredients: FC = () => {
  return (
    <div className="pt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <BurgerIngredientsWrap />
    </div>
  );
};

export default BurgerIngredients;
