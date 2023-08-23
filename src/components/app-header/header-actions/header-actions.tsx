import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-actions.module.css";
import { Link } from "react-router-dom";
import { FC } from "react";
import { IPathname } from "../../../services/types/types";

const HeaderActions: FC<IPathname> = ({ pathname }) => {
  return (
    <Link
      className={
        pathname === "/profile" ? styles.personalActive : styles.personal
      }
      to={{ pathname: "/profile" }}
    >
      <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} />
      <p className="text text_type_main-default ml-2">Личный кабинет</p>
    </Link>
  );
};

export default HeaderActions;
