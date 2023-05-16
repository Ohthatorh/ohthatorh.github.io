import { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import classNames from "classnames";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import {
  REMOVE_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT,
} from "../../../services/actions/currentIngredient";

function BurgerIngredientItem({ item, index }) {
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: "ingredient",
    item,
  });
  const [showModal, setShowModal] = useState(false);
  const currentIngredients = useSelector(
    (store) => store.currentIngredients.items
  );
  const count = currentIngredients.filter((el) => el._id === item._id).length;
  const textClassNames = classNames(
    `${styles.textBurgerItem}`,
    "text text_type_digits-default mb-1"
  );
  const handleOpenModal = () => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      item,
    });
    setShowModal(true);
  };
  const handleCloseModal = () => {
    dispatch({
      type: REMOVE_CURRENT_INGREDIENT,
    });
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <IngredientDetails
          text="Детали ингредиента"
          item={item}
          onClose={handleCloseModal}
        />
      )}
      <li
        ref={dragRef}
        key={index}
        className={styles.burgerItem}
        onClick={handleOpenModal}
      >
        <picture className="pl-4 pr-4 pb-1">
          <source srcSet={item.image_mobile} media="(max-width: 767px)" />
          {/* <source srcset={item.image} media="(max-width: 1023px)" /> */}
          <img src={item.image} alt={item.name} />
        </picture>
        <p className={textClassNames}>
          {item.price}
          <CurrencyIcon type="primary" />
        </p>
        <Counter count={count} size="default" extraClass="m-1" />
        <p className="text text_type_main-default">{item.name}</p>
      </li>
    </>
  );
}

export default BurgerIngredientItem;
