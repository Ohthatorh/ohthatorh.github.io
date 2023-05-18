import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstrucorItem from "../burger-constructor-item/burger-constructor-item";
import styles from "./burger-constructor-list.module.css";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import {
  SET_BUN_INGREDIENT,
  SORT_INGREDIENTS,
  UPDATE_INGREDIENTS,
} from "../../../services/actions/currentIngredients";
import update from "immutability-helper";

function BurgerConstructorList() {
  const dispatch = useDispatch();
  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      if (item.type === "bun") {
        dispatch({
          type: SET_BUN_INGREDIENT,
          item,
        });
      } else {
        dispatch({
          type: UPDATE_INGREDIENTS,
          item,
        });
      }
    },
  });
  const borderColor = isHover ? "lightgreen" : "transparent";
  const burgerConstructorListWrapClassNames = classNames(
    `${styles.burgerConstructorListWrap} mb-10`
  );
  const data = useSelector((store) => store.currentIngredients.items);
  const bun = data.filter((el) => el.type === "bun")[0];
  const ingredientsWithoutBun = data.filter((el) => el.type !== "bun");
  const moveCard = (dragIndex, hoverIndex) => {
    const sortedIngredients = update(ingredientsWithoutBun, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, ingredientsWithoutBun[dragIndex]],
      ],
    });
    dispatch({
      type: SORT_INGREDIENTS,
      items: [bun, ...sortedIngredients],
    });
  };
  return (
    <div
      className={burgerConstructorListWrapClassNames}
      ref={dropTarget}
      style={{ borderColor }}
    >
      <div className={styles.burgerConstructorFixed}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <ul className={styles.burgerConstructorList}>
        {ingredientsWithoutBun.map((el, index) => {
          return (
            <BurgerConstrucorItem
              item={el}
              key={index}
              index={index}
              moveCard={moveCard}
            />
          );
        })}
      </ul>
      <div className={styles.burgerConstructorFixed}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
    </div>
  );
}

export default BurgerConstructorList;
