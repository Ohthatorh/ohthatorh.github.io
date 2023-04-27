import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstrucorItem from "../burger-constructor-item/burger-constructor-item";
import styles from "./burger-constructor-list.module.css";
import classNames from "classnames";

function BurgerConstructorList({ data }) {
  const burgerConstructorListWrapClassNames = classNames(
    `${styles.burgerConstructorListWrap} mb-10`
  );
  return (
    <div className={burgerConstructorListWrapClassNames}>
      <div className={styles.burgerConstructorFixed}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[0].image}
        />
      </div>
      <ul className={styles.burgerConstructorList}>
        {data.map((el, index) => {
          return <BurgerConstrucorItem item={el} key={index} />;
        })}
      </ul>
      <div className={styles.burgerConstructorFixed}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[0].image}
        />
      </div>
    </div>
  );
}

export default BurgerConstructorList;
