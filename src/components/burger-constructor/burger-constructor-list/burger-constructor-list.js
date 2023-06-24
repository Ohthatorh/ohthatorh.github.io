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
import { v4 as uuidv4 } from "uuid";

function BurgerConstructorList() {
  const burgerConstructorListWrapClassNames = classNames(
    `${styles.burgerConstructorListWrap} mb-10`
  );
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
          item: { ...item, uniqueId: uuidv4() },
        });
      }
    },
  });
  const borderColor = isHover ? "lightgreen" : "transparent";
  const bun = useSelector((store) => store.currentIngredients.bun);
  const data = useSelector((store) => store.currentIngredients.items);
  const moveCard = (dragIndex, hoverIndex) => {
    const sortedIngredients = update(data, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, data[dragIndex]],
      ],
    });
    dispatch({
      type: SORT_INGREDIENTS,
      items: sortedIngredients,
    });
  };
  return (
    <>
      <p
        className="text text_type_main-medium mb-5"
        style={{ textAlign: "right" }}
      >
        Перенесите ингредиенты
      </p>
      <div
        className={burgerConstructorListWrapClassNames}
        ref={dropTarget}
        style={{ borderColor }}
      >
        {bun && (
          <div className={styles.burgerConstructorFixed}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
        <ul className={styles.burgerConstructorList}>
          {data.map((el, index) => {
            return (
              <BurgerConstrucorItem
                item={el}
                key={el.uniqueId}
                index={index}
                moveCard={moveCard}
              />
            );
          })}
        </ul>
        {bun && (
          <div className={styles.burgerConstructorFixed}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default BurgerConstructorList;
