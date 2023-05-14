import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstrucorItem from "../burger-constructor-item/burger-constructor-item";
import styles from "./burger-constructor-list.module.css";
import classNames from "classnames";
import { SelectedIngredientsContext } from "../../../services/selectedIngredientsContext";
import { useContext } from "react";

function BurgerConstructorList() {
  const burgerConstructorListWrapClassNames = classNames(
    `${styles.burgerConstructorListWrap} mb-10`
  );
  const data = useContext(SelectedIngredientsContext);
  const bun = data.filter((el) => el.type === "bun")[0];
  const ingredientsWithoutBun = data.filter((el) => el.type !== "bun");
  return (
    <div className={burgerConstructorListWrapClassNames}>
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
          return <BurgerConstrucorItem item={el} key={index} />;
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
