import BurgerIngredientsWrap from "./burger-ingredients-wrap/burger-ingredients-wrap";
import { FC } from "react";

const BurgerIngredients: FC = () => {
  return (
    <div className="pt-10">
      <p className="text text_type_main-large mb-5">Соберите бургер</p>
      <BurgerIngredientsWrap />
    </div>
  );
};

export default BurgerIngredients;
