import { useState } from "react";
import BurgerIngredientsWrap from "./burger-ingredients-wrap/burger-ingredients-wrap";
import BurgerIngredientsTabs from "./burger-ingredients-tabs/burger-ingredients-tabs";
import { SelectedTabContext } from "../../services/contexts/selectedTabContext";

function BurgerIngredients() {
  const [currentTab, setCurrentTab] = useState("bun");
  return (
    <div className="pt-10">
      <p className="text text_type_main-large mb-5">Соберите бургер</p>
      <SelectedTabContext.Provider value={currentTab}>
        <BurgerIngredientsTabs />
        <BurgerIngredientsWrap setCurrentTab={setCurrentTab} />
      </SelectedTabContext.Provider>
    </div>
  );
}

export default BurgerIngredients;
