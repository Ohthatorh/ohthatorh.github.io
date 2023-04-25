import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import HeaderNavigation from "./header-navigation/header-navigation";
import HeaderActions from "./header-actions/header-actions";

function AppHeader() {
  return (
    <header className="container">
      <div className={`${styles.header} pt-4 pb-4`}>
        <HeaderNavigation />
        <Logo />
        <HeaderActions />
      </div>
    </header>
  );
}

export default AppHeader;
