import {
  ProfileIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-actions.module.css";

function HeaderActions() {
  return (
    <Button
      extraClass={styles.personal}
      htmlType="button"
      type="secondary"
      size="medium"
    >
      <ProfileIcon type="secondary" />
      Личный кабинет
    </Button>
  );
}

export default HeaderActions;
