import AppHeader from "../../app-header/app-header";
import { useState } from "react";
import styles from "./register-page.module.css";
import classNames from "classnames";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registration } from "../../../services/actions/auth";

export function RegisterPage() {
  const dispatch = useDispatch();
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const onClickButton = () => {
    if (!form.email || !form.password || !form.name) {
      return;
    }
    dispatch(registration(form));
    navigate("/login");
  };
  return (
    <>
      <AppHeader />
      <main className={mainClassNames}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"name"}
            onChange={onChangeInput}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            value={form.name}
          />
          <EmailInput
            onChange={onChangeInput}
            value={form.email}
            name={"email"}
            extraClass="mb-6"
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
    </>
  );
}
