import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext } from "react";
import { SelectedTabContext } from "../../../services/contexts/selectedTabContext";

function BurgerIngredientsTabs() {
  const current = useContext(SelectedTabContext);
  return (
    <div className="mb-10" style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "bun"}>
        Булки
      </Tab>
      <Tab value="Начинки" active={current === "main"}>
        Начинки
      </Tab>
      <Tab value="Соусы" active={current === "sauce"}>
        Соусы
      </Tab>
    </div>
  );
}

export default BurgerIngredientsTabs;
