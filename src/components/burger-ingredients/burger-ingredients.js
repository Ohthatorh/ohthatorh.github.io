import PropTypes from "prop-types";
import BurgerIngredientsWrap from "./burger-ingredients-wrap/burger-ingredients-wrap";
import BurgerIngredientsTabs from "./burger-ingredients-tabs/burger-ingredients-tabs";

function BurgerIngredients(props) {
  return (
    <div className="pt-10">
      <p className="text text_type_main-large mb-5">Соберите бургер</p>
      <BurgerIngredientsTabs />
      <BurgerIngredientsWrap data={props.data} />
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array,
};

export default BurgerIngredients;
