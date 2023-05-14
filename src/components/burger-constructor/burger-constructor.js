import { useState } from "react";
import BurgerConstrucorInfo from "./burger-constructor-info/burger-constructor-info";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import styles from "./burger-constructor.module.css";
import classNames from "classnames";
import { SelectedIngredientsContext } from "../../services/selectedIngredientsContext";

function BurgerConstrucor() {
  const [selectedIngredients] = useState([
    {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0941",
      name: "Биокотлета из марсианской Магнолии",
      type: "main",
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: "https://code.s3.yandex.net/react/code/meat-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0946",
      name: "Хрустящие минеральные кольца",
      type: "main",
      proteins: 808,
      fat: 689,
      carbohydrates: 609,
      calories: 986,
      price: 300,
      image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
      image_mobile:
        "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
      image_large:
        "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0947",
      name: "Плоды Фалленианского дерева",
      type: "main",
      proteins: 20,
      fat: 5,
      carbohydrates: 55,
      calories: 77,
      price: 874,
      image: "https://code.s3.yandex.net/react/code/sp_1.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0948",
      name: "Кристаллы марсианских альфа-сахаридов",
      type: "main",
      proteins: 234,
      fat: 432,
      carbohydrates: 111,
      calories: 189,
      price: 762,
      image: "https://code.s3.yandex.net/react/code/core.png",
      image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/core-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa0949",
      name: "Мини-салат Экзо-Плантаго",
      type: "main",
      proteins: 1,
      fat: 2,
      carbohydrates: 3,
      calories: 6,
      price: 4400,
      image: "https://code.s3.yandex.net/react/code/salad.png",
      image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
      __v: 0,
    },
    {
      _id: "643d69a5c3f7b9001cfa094a",
      name: "Сыр с астероидной плесенью",
      type: "main",
      proteins: 84,
      fat: 48,
      carbohydrates: 420,
      calories: 3377,
      price: 4142,
      image: "https://code.s3.yandex.net/react/code/cheese.png",
      image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
      __v: 0,
    },
  ]);
  const burgerConstructorWrapClassNames = classNames(
    `${styles.burgerConstructorWrap} pt-25 pl-4 pr-4`
  );
  return (
    <div className={burgerConstructorWrapClassNames}>
      <SelectedIngredientsContext.Provider value={selectedIngredients}>
        <BurgerConstructorList />
        <BurgerConstrucorInfo />
      </SelectedIngredientsContext.Provider>
    </div>
  );
}

export default BurgerConstrucor;
