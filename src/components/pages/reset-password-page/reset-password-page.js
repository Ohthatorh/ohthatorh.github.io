import AppHeader from "../../app-header/app-header";
import { useState } from "react";
import styles from "./reset-password-page.module.css";
import classNames from "classnames";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { sendResetPassword } from "../../../services/actions/resetPassword";
import { useDispatch } from "react-redux";

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const [form, setForm] = useState({ password: "", token: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onClickButton = () => {
    if (!form.password || !form.token) {
      return;
    }
    dispatch(sendResetPassword(form));
    navigate("/login");
  };
  return (
    <>
      <AppHeader />
      <main className={mainClassNames}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <PasswordInput
            onChange={onChangeInput}
            value={form.password}
            name={"password"}
            extraClass="mb-6"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            name={"token"}
            onChange={onChangeInput}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            value={form.token}
          />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={onClickButton}
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
    </>
  );
}
