import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-navigation.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IPathname, TClassnames } from "../../../services/types/types";
import { FC } from "react";

const HeaderNavigation: FC<IPathname> = ({ pathname }) => {
  const navLinkClassNamesActive: TClassnames = classNames(
    `${styles.navLink} ${styles.navLinkActive} pl-5 pr-5 pb-5 pt-5`
  );
  const navLinkClassNames: TClassnames = classNames(
    `${styles.navLink} pl-5 pr-5 pb-5 pt-5`
  );
  return (
    <nav>
      <ul className={styles.navList}>
        <li className="mr-2">
          <Link
            className={
              pathname === "/" ? navLinkClassNamesActive : navLinkClassNames
            }
            to={{ pathname: "/" }}
          >
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </Link>
        </li>
        <li>
          <a
            className={
              pathname === "/lenta"
                ? navLinkClassNamesActive
                : navLinkClassNames
            }
            href="../"
          >
            <BurgerIcon
              type={pathname === "/lenta" ? "primary" : "secondary"}
            />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
HeaderNavigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default HeaderNavigation;
