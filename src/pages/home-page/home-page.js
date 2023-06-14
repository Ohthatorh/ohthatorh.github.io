import { useEffect, useState } from "react";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstrucor from "../../components/burger-constructor/burger-constructor";
import { getIngredientsRequest } from "../../utils/burger-api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./home-page.module.css";
import classNames from "classnames";

export function HomePage() {
  const burgerMainClassNames = classNames(`${styles.burgerMain} container`);
  const [data, setData] = useState({
    isLoading: true,
    ingredients: null,
    hasError: false,
  });
  useEffect(() => {
    setData({ ...data, isLoading: true, hasError: false });
    getIngredientsRequest()
      .then((res) =>
        setData({ ...data, isLoading: false, ingredients: res.data })
      )
      .catch((e) => {
        setData({ ...data, isLoading: false, hasError: true });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        {!data.isLoading && data.ingredients && (
          <section className={burgerMainClassNames}>
            <BurgerIngredients />
            <BurgerConstrucor />
          </section>
        )}
      </main>
    </DndProvider>
  );
}
