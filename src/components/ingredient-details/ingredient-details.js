import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import Modal from "../modal/modal";

function IngredientDetails({ text, item, onClose }) {
  const modalInfoItemImgClassNames = classNames(`${styles.modalImg} mb-4`);
  const modalInfoItemTitleClassNames = classNames(
    `${styles.modalInfoItemTitle} text text_type_main-default mb-2`
  );
  const modalInfoItemTextClassNames = classNames(
    `${styles.modalInfoItemTitle} text text_type_digits-default`
  );
  return (
    <Modal text={text} onClose={onClose}>
      <div className={styles.modalWrap}>
        <picture>
          <source srcSet={item.image_mobile} media="(max-width: 767px)" />
          {/* <source srcset={item.image} media="(max-width: 1023px)" /> */}
          <img
            className={modalInfoItemImgClassNames}
            src={item.image}
            alt={item.name}
          />
        </picture>
        <p className="text text_type_main-medium mb-8">{item.name}</p>
        <ul className={styles.modalInfoList}>
          <li>
            <p className={modalInfoItemTitleClassNames}>Калории,ккал</p>
            <p className={modalInfoItemTextClassNames}>{item.calories}</p>
          </li>
          <li>
            <p className={modalInfoItemTitleClassNames}>Белки,г</p>
            <p className={modalInfoItemTextClassNames}>{item.proteins}</p>
          </li>
          <li>
            <p className={modalInfoItemTitleClassNames}>Жиры,г</p>
            <p className={modalInfoItemTextClassNames}>{item.fat}</p>
          </li>
          <li>
            <p className={modalInfoItemTitleClassNames}>Углеводы,г</p>
            <p className={modalInfoItemTextClassNames}>{item.carbohydrates}</p>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

IngredientDetails.propTypes = {
  text: PropTypes.string.isRequired,
  // ...если поставлю PropTypes.objectOf(ingredientsPropTypes).isRequired то получу ошибку, почему?
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    __v: PropTypes.number,
  }),
  onClose: PropTypes.func.isRequired,
};

export default IngredientDetails;
