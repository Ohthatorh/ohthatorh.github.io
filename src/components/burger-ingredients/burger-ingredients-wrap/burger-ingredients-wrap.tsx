import BurgerIngredientsList from "../burger-ingredient-list/burger-ingredients-list";
import styles from "./burger-ingredients-wrap.module.css";
import { FC, useState, useRef } from "react";
import {
  THandleScroll,
  TIngredient,
  TTitlesStructure,
} from "../../../services/types/types";
import { useAppSelector } from "../../../services/hooks/hooks";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

interface IStructureData {
  [key: string]: {
    items: Array<TIngredient>;
    title: string;
    type: string;
  };
}

const BurgerIngredientsWrap: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("bun");
  const data = useAppSelector((store) => store.ingredients.items);
  const names: TTitlesStructure = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
  };
  let structureData: IStructureData = {};
  data.forEach((el: TIngredient) => {
    if (!structureData[el.type]) {
      structureData[el.type] = {
        items: [],
        title: names[el.type],
        type: el.type,
      };
    }
    structureData[el.type].items.push(el);
  });
  const burgerWrapRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    if (burgerWrapRef.current!.scrollTop === 0) {
      setCurrentTab("bun");
    } else if (
      burgerWrapRef.current!.scrollTop >= 275 &&
      burgerWrapRef.current!.scrollTop <= 1240
    ) {
      setCurrentTab("main");
    } else if (burgerWrapRef.current!.scrollTop >= 1240) {
      setCurrentTab("sauce");
    }
  };
  const handleClick = (tab: string) => {
    setCurrentTab(tab);
    const tabRef = burgerWrapRef.current?.querySelector(
      `.${tab}__search`
    ) as HTMLElement | null;
    if (burgerWrapRef.current !== null) {
      burgerWrapRef.current.scrollBy({
        top: tabRef!.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="mb-10" style={{ display: "flex" }}>
        <Tab
          value="Булки"
          active={currentTab === "bun"}
          onClick={() => handleClick("bun")}
        >
          Булки
        </Tab>
        <Tab
          value="Начинки"
          active={currentTab === "main"}
          onClick={() => handleClick("main")}
        >
          Начинки
        </Tab>
        <Tab
          value="Соусы"
          active={currentTab === "sauce"}
          onClick={() => handleClick("sauce")}
        >
          Соусы
        </Tab>
      </div>
      <ul
        ref={burgerWrapRef}
        className={styles.burgerIngredientsWrap}
        onScroll={handleScroll}
      >
        {Object.values(structureData).map((el, index) => {
          return <BurgerIngredientsList item={el} key={index} />;
        })}
      </ul>
    </>
  );
};

export default BurgerIngredientsWrap;
