import PropTypes from "prop-types";
import BurgerIngredientsWrap from "./burger-ingredients-wrap/burger-ingredients-wrap";
import BurgerIngredientsTabs from "./burger-ingredients-tabs/burger-ingredients-tabs";
import ingredientsPropTypes from "../../propTypes/ingredients";

function BurgerIngredients({ data }) {
  return (
    <div className="pt-10">
      <p className="text text_type_main-large mb-5">Соберите бургер</p>
      <BurgerIngredientsTabs />
      <BurgerIngredientsWrap data={data} />
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};
export default BurgerIngredients;
