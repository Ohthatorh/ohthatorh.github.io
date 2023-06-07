import AppHeader from "../../app-header/app-header";
import { useState } from "react";
import styles from "./login-page.module.css";
import classNames from "classnames";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../../services/actions/auth";

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const [form, setForm] = useState({ email: "", password: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onClickButton = () => {
    if (!form.email || !form.password) {
      return;
    }
    dispatch(auth(form));
    navigate("/");
  };
  return (
    <>
      <AppHeader />
      <main className={mainClassNames}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium mb-6">Вход</h1>
          <EmailInput
            onChange={onChangeInput}
            value={form.email}
            name={"email"}
            extraClass="mb-6"
            onError={() => console.log("here")}
            onErrorCapture={() => console.log("asd")}
          />
          <PasswordInput
            onChange={onChangeInput}
            value={form.password}
            name={"password"}
            extraClass="mb-6"
          />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={onClickButton}
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
    </>
  );
}
