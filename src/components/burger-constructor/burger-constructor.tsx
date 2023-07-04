import { FC } from "react";
import BurgerConstrucorInfo from "./burger-constructor-info/burger-constructor-info";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import styles from "./burger-constructor.module.css";
import classNames from "classnames";
import { TClassnames } from "../../services/types/types";

const BurgerConstrucor: FC = () => {
  const burgerConstructorWrapClassNames: TClassnames = classNames(
    `${styles.burgerConstructorWrap} pt-25 pl-4 pr-4`
  );
  return (
    <div className={burgerConstructorWrapClassNames}>
      <BurgerConstructorList />
      <BurgerConstrucorInfo />
    </div>
  );
};

export default BurgerConstrucor;
