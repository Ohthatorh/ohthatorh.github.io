import "./App.css";
import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstrucor from "../burger-constructor/burger-constructor";

const LIST_INGREDIENTS_URL =
  "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = useState({
    isLoading: true,
    data: null,
    hasError: false,
  });
  useEffect(() => {
    setData({ ...data, isLoading: true, hasError: false });
    fetch(LIST_INGREDIENTS_URL)
      .then((res) => res.json())
      .then((res) => setData({ ...data, isLoading: false, data: res.data }))
      .catch((e) => {
        setData({ ...data, isLoading: false, hasError: true });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <AppHeader />
      <main>
        {!data.isLoading && (
          <section className="burgerMain container">
            <BurgerIngredients data={data.data} />
            <BurgerConstrucor data={data.data} />
          </section>
        )}
      </main>
      <div id="modals"></div>
    </div>
  );
}

export default App;
