import styles from "./register-page.module.css";
import classNames from "classnames";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../../services/actions/auth";
import { useForm } from "../../services/hooks/useForm";
import { FC, FormEvent } from "react";
import { TClassnames } from "../../services/types/types";
import { useAppDispatch } from "../../services/hooks/hooks";

export const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mainClassNames: TClassnames = classNames(`${styles.main} container`);
  const textClassNames: TClassnames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const { values, handleChange } = useForm() as any;
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.email || !values.password || !values.name) {
      return;
    }
    dispatch(registration(values));
    navigate("/login");
  };
  return (
    <main className={mainClassNames}>
      <form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
        <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          onChange={handleChange}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          value={values.name}
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={"password"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Зарегистрироваться
        </Button>
        <p className={textClassNames}>
          Уже зарегистрированы?{" "}
          <Link className={styles.link} to={{ pathname: "/login" }}>
            {" "}
            Войти{" "}
          </Link>
        </p>
      </form>
    </main>
  );
};
