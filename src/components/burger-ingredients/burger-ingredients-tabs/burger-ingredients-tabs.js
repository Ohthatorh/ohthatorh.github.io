import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function BurgerIngredientsTabs() {
  const [current, setCurrent] = React.useState("Булки");
  return (
    <div className="mb-10" style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

export default BurgerIngredientsTabs;
