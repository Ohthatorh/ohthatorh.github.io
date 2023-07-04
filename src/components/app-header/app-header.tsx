import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import HeaderNavigation from "./header-navigation/header-navigation";
import HeaderActions from "./header-actions/header-actions";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import { TClassnames } from "../../services/types/types";

const AppHeader: FC = () => {
  const location = useLocation();
  const headerClassNames: TClassnames = classNames(
    `${styles.header} pt-4 pb-4`
  );
  return (
    <header className="container">
      <div className={headerClassNames}>
        <HeaderNavigation pathname={location.pathname} />
        <Link to={{ pathname: "/" }}>
          <Logo />
        </Link>
        <HeaderActions pathname={location.pathname} />
      </div>
    </header>
  );
};

export default AppHeader;
