import BurgerIngredientsList from "../burger-ingredient-list/burger-ingredients-list";
import styles from "./burger-ingredients-wrap.module.css";
import { useSelector } from "react-redux";
import { FC } from "react";
import {
  IBurgerIngredientsWrap,
  THandleScroll,
  TIngredient,
  TTitlesStructure,
} from "../../../services/types/types";

interface IStructureData {
  [key: string]: {
    items: Array<TIngredient>;
    title: string;
  };
}

const BurgerIngredientsWrap: FC<IBurgerIngredientsWrap> = ({
  setCurrentTab,
}) => {
  const data = useSelector((store: any) => store.ingredients.items);
  const names: TTitlesStructure = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
  };
  let structureData: IStructureData = {};
  data.forEach((el: TIngredient) => {
    if (!structureData[el.type]) {
      structureData[el.type] = { items: [], title: names[el.type] };
    }
    structureData[el.type].items.push(el);
  });

  const handleScroll: THandleScroll = (e) => {
    const scrollContainerTopPosition = e.target.scrollTop;
    if (scrollContainerTopPosition === 0) {
      setCurrentTab("bun");
    } else if (
      scrollContainerTopPosition >= 275 &&
      scrollContainerTopPosition <= 1240
    ) {
      setCurrentTab("main");
    } else if (scrollContainerTopPosition >= 1240) {
      setCurrentTab("sauce");
    }
  };
  return (
    <ul className={styles.burgerIngredientsWrap} onScroll={() => handleScroll}>
      {Object.values(structureData).map((el, index) => {
        return <BurgerIngredientsList item={el} key={index} />;
      })}
    </ul>
  );
};

export default BurgerIngredientsWrap;
