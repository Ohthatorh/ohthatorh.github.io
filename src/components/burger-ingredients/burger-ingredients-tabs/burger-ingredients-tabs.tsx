import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext } from "react";
import { SelectedTabContext } from "../../../services/contexts/selectedTabContext";
import { FC } from "react";

export const BurgerIngredientsTabs: FC = () => {
  const current = useContext(SelectedTabContext);
  return (
    <div className="mb-10" style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "bun"} onClick={() => null}>
        Булки
      </Tab>
      <Tab value="Начинки" active={current === "main"} onClick={() => null}>
        Начинки
      </Tab>
      <Tab value="Соусы" active={current === "sauce"} onClick={() => null}>
        Соусы
      </Tab>
    </div>
  );
};

export default BurgerIngredientsTabs;
