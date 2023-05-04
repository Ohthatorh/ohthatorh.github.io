import "./App.css";
import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstrucor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/burger-api";

function App() {
  const [data, setData] = useState({
    isLoading: true,
    ingredients: null,
    hasError: false,
  });
  useEffect(() => {
    setData({ ...data, isLoading: true, hasError: false });
    getIngredients()
      .then((res) =>
        setData({ ...data, isLoading: false, ingredients: res.data })
      )
      .catch((e) => {
        setData({ ...data, isLoading: false, hasError: true });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <AppHeader />
      <main>
        {!data.isLoading && data.ingredients && (
          <section className="burgerMain container">
            <BurgerIngredients data={data.ingredients} />
            <BurgerConstrucor data={data.ingredients} />
          </section>
        )}
      </main>
      <div id="modals"></div>
    </div>
  );
}

export default App;
