import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { data } from "./utils/data";
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstrucor from "./components/burger-constructor/burger-constructor";

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
