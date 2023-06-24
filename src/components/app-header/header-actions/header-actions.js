import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-actions.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HeaderActions({ pathname }) {
  return (
    <Link
      className={pathname === "/" ? styles.personal : styles.personalActive}
      to={{ pathname: "/profile" }}
    >
      <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} />
      <p className="text text_type_main-default ml-2">Личный кабинет</p>
    </Link>
  );
}

HeaderActions.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default HeaderActions;
