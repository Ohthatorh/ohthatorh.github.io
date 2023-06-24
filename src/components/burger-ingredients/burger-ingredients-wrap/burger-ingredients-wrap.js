import PropTypes from "prop-types";
import BurgerIngredientsList from "../burger-ingredient-list/burger-ingredients-list";
import styles from "./burger-ingredients-wrap.module.css";
import { useSelector } from "react-redux";

function BurgerIngredientsWrap({ setCurrentTab }) {
  const data = useSelector((store) => store.ingredients.items);
  const names = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
  };
  let structureData = {};
  data.forEach((el) => {
    if (!structureData[el.type]) {
      structureData[el.type] = { items: [], title: names[el.type] };
    }
    structureData[el.type].items.push(el);
  });
  const handleScroll = (e) => {
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
    <ul className={styles.burgerIngredientsWrap} onScroll={handleScroll}>
      {Object.values(structureData).map((el, index) => {
        return <BurgerIngredientsList item={el} key={index} />;
      })}
    </ul>
  );
}

BurgerIngredientsWrap.propTypes = {
  setCurrentTab: PropTypes.func.isRequired,
};

export default BurgerIngredientsWrap;
