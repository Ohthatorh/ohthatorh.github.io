import "./App.css";
import { data } from "../utils/data";
import AppHeader from "./app-header/app-header";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstrucor from "./burger-constructor/burger-constructor";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <section className="burgerMain container">
          <BurgerIngredients data={data} />
          <BurgerConstrucor data={data} />
        </section>
      </main>
    </div>
  );
}

export default App;
