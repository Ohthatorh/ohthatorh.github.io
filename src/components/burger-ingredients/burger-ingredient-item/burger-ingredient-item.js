import { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import classNames from "classnames";
import IngredientDetails from "../../ingredient-details/ingredient-details";

function BurgerIngredientItem({ item, index }) {
  const [showModal, setShowModal] = useState(false);
  const textClassNames = classNames(
    `${styles.textBurgerItem}`,
    "text text_type_digits-default mb-1"
  );
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      {showModal && (
        <IngredientDetails
          text="Детали ингредиента"
          item={item}
          onClose={handleCloseModal}
        />
      )}
      <li key={index} className={styles.burgerItem} onClick={handleOpenModal}>
        <picture className="pl-4 pr-4 pb-1">
          <source srcSet={item.image_mobile} media="(max-width: 767px)" />
          {/* <source srcset={item.image} media="(max-width: 1023px)" /> */}
          <img src={item.image} alt={item.name} />
        </picture>
        <p className={textClassNames}>
          {item.price}
          <CurrencyIcon type="primary" />
        </p>
        <Counter count={1} size="default" extraClass="m-1" />
        <p className="text text_type_main-default">{item.name}</p>
      </li>
    </>
  );
}

export default BurgerIngredientItem;
