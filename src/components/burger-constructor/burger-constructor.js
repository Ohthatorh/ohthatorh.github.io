import PropTypes from "prop-types";
import BurgerConstrucorInfo from "./burger-constructor-info/burger-constructor-info";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import styles from "./burger-constructor.module.css";
import classNames from "classnames";
import ingredientsPropTypes from "../../propTypes/ingredients";

function BurgerConstrucor({ data }) {
  const burgerConstructorWrapClassNames = classNames(
    `${styles.burgerConstructorWrap} pt-25 pl-4 pr-4`
  );
  return (
    <div className={burgerConstructorWrapClassNames}>
      <BurgerConstructorList data={data} />
      <BurgerConstrucorInfo />
    </div>
  );
}

BurgerConstrucor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes),
};

export default BurgerConstrucor;
