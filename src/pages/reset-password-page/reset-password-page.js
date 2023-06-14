import styles from "./reset-password-page.module.css";
import classNames from "classnames";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendResetPassword } from "../../services/actions/resetPassword";
import { useForm } from "../../services/hooks/useForm";

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const { values, handleChange } = useForm({
    password: "",
    token: "",
  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!values.password || !values.token) {
      return;
    }
    dispatch(sendResetPassword(values));
    navigate("/login");
  };
  return (
    <main className={mainClassNames}>
      <form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={"password"}
          extraClass="mb-6"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          name={"token"}
          onChange={handleChange}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          value={values.token}
        />
        <Button
          htmlType="submit"
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
