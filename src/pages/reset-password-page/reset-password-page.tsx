import styles from "./reset-password-page.module.css";
import classNames from "classnames";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { sendResetPassword } from "../../services/actions/resetPassword";
import { useForm } from "../../services/hooks/useForm";
import { FC, FormEvent } from "react";
import { TClassnames } from "../../services/types/types";
import { useAppDispatch } from "../../services/hooks/hooks";

export const ResetPasswordPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mainClassNames: TClassnames = classNames(`${styles.main} container`);
  const textClassNames: TClassnames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const { values, handleChange } = useForm({}) as any;
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
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
};
