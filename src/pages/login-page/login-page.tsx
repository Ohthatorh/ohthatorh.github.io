import styles from "./login-page.module.css";
import classNames from "classnames";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { auth } from "../../services/actions/auth";
import { useForm } from "../../services/hooks/useForm";
import { FC, FormEvent } from "react";
import { IData, TClassnames } from "../../services/types/types";
import { useAppDispatch } from "../../services/hooks/hooks";
import { ChangeEvent } from "react";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const mainClassNames: TClassnames = classNames(`${styles.main} container`);
  const textClassNames: TClassnames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const {
    values,
    handleChange,
  }: {
    values: IData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  } = useForm({
    email: "",
    password: "",
  });
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    dispatch(auth(values));
  };
  return (
    <main className={mainClassNames}>
      <form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
        <EmailInput
          onChange={handleChange}
          value={values.email || ""}
          name={"email"}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password || ""}
          name={"password"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Войти
        </Button>
        <p className={textClassNames}>
          Вы - новый пользователь?{" "}
          <Link className={styles.link} to={{ pathname: "/register" }}>
            {" "}
            Зарегистрироваться{" "}
          </Link>
        </p>
        <p className={textClassNames}>
          Забыли пароль?{" "}
          <Link className={styles.link} to={{ pathname: "/forgot-password" }}>
            {" "}
            Восстановить пароль{" "}
          </Link>
        </p>
      </form>
    </main>
  );
};
