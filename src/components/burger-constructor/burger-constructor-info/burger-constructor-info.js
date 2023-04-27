import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-info.module.css";
import classNames from "classnames";

function BurgerConstrucorInfo() {
  const textClassNames = classNames(
    `${styles.burgerConstructorInfoText} text text_type_digits-medium mr-10`
  );
  return (
    <div className={styles.burgerInfoWrap}>
      <p className={textClassNames}>
        610
        <CurrencyIcon type="primary" />
      </p>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

export default BurgerConstrucorInfo;
