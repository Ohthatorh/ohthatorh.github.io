import styles from "./ingredient-page.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classNames from "classnames";

export function IngredientPage() {
  const modalInfoItemImgClassNames = classNames(`${styles.modalImg} mb-4`);
  const modalInfoItemTitleClassNames = classNames(
    `${styles.modalInfoItemTitle} text text_type_main-default mb-2`
  );
  const modalInfoItemTextClassNames = classNames(
    `${styles.modalInfoItemTitle} text text_type_digits-default`
  );
  const { ingredientId } = useParams();
  const item = useSelector(
    (store) =>
      store.ingredients.items.filter((el) => el._id === ingredientId)[0]
  );
  return (
    <main>
      {item && (
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
              <p className={modalInfoItemTextClassNames}>
                {item.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
