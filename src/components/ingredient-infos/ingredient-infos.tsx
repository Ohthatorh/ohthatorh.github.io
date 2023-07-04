import classNames from "classnames";
import styles from "./ingredient-infos.module.css";
import { FC } from "react";
import { TClassnames, TIngredient } from "../../services/types/types";

const IngredientInfos: FC<{ item: TIngredient }> = ({ item }) => {
  const modalInfoItemImgClassNames: TClassnames = classNames(
    `${styles.modalImg} mb-4`
  );
  const modalInfoItemTitleClassNames: TClassnames = classNames(
    `${styles.modalInfoItemTitle} text text_type_main-default mb-2`
  );
  const modalInfoItemTextClassNames: TClassnames = classNames(
    `${styles.modalInfoItemTitle} text text_type_digits-default`
  );
  return (
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
  );
};

export default IngredientInfos;
