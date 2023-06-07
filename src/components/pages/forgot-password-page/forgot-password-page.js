import AppHeader from "../../app-header/app-header";
import { useState } from "react";
import styles from "./forgot-password-page.module.css";
import classNames from "classnames";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendForgotLetter } from "../../../services/actions/forgotPassword";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mb-4`
  );
  const [form, setForm] = useState({ email: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onClickButton = () => {
    if (!form.email) {
      return;
    }
    dispatch(sendForgotLetter(form.email));
    navigate("/reset-password");
  };
  return (
    <>
      <AppHeader />
      <main className={mainClassNames}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <EmailInput
            onChange={onChangeInput}
            value={form.email}
            name={"email"}
            extraClass="mb-6"
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
