import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstrucor from "../../components/burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./home-page.module.css";
import classNames from "classnames";

export function HomePage() {
  const burgerMainClassNames = classNames(`${styles.burgerMain} container`);
  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <section className={burgerMainClassNames}>
          <BurgerIngredients />
          <BurgerConstrucor />
        </section>
      </main>
    </DndProvider>
  );
}
