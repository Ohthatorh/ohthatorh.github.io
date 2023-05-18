import "./App.css";
import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstrucor from "../burger-constructor/burger-constructor";
import { getIngredientsRequest } from "../../utils/burger-api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
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
      <div className="App">
        <AppHeader />
        <main>
          {!data.isLoading && data.ingredients && (
            <section className="burgerMain container">
              <BurgerIngredients />
              <BurgerConstrucor />
            </section>
          )}
        </main>
        <div id="modals"></div>
      </div>
    </DndProvider>
  );
}

export default App;
