import styles from "./forgot-password-page.module.css";
import classNames from "classnames";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendForgotLetter } from "../../services/actions/forgotPassword";
import { useForm } from "../../services/hooks/useForm";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const { values, handleChange } = useForm({
    email: "",
  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!values.email) {
      return;
    }
    dispatch(sendForgotLetter(values.email));
    navigate("/reset-password");
  };
  return (
    <main className={mainClassNames}>
      <form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
          extraClass="mb-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Восстановить
        </Button>
        <p className={textClassNames}>
          Вспомнили пароль?{" "}
          <Link className={styles.link} to={{ pathname: "/login" }}>
            {" "}
            Войти{" "}
          </Link>
        </p>
      </form>
    </main>
  );
}
