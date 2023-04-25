import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-navigation.module.css";

function HeaderNavigation() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className="mr-2">
          <a
            className={`${styles.navLink} ${styles.navLinkActive} pl-5 pr-5 pb-5 pt-5`}
            href="#"
          >
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </a>
        </li>
        <li>
          <a className={`${styles.navLink} pl-5 pr-5 pb-5 pt-5`} href="#">
            <BurgerIcon type="secondary" />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
