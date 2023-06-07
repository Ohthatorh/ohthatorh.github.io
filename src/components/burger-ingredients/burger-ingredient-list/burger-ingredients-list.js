import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import styles from "./burger-ingredient-list.module.css";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

function BurgerIngredientsList({ item, index }) {
  const burgeringredientsListClassNames = classNames(
    `${styles.burgerIngredientsList}`,
    "pt-6 pl-4 pb-10"
  );
  return (
    <li key={index}>
      <p className="text text_type_main-medium">{item.title}</p>
      <ul className={burgeringredientsListClassNames}>
        {item.items.map((el, index) => {
          return <BurgerIngredientItem item={el} key={uuidv4()} />;
        })}
      </ul>
    </li>
  );
}

export default BurgerIngredientsList;
