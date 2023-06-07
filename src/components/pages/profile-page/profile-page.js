import classNames from "classnames";
import AppHeader from "../../app-header/app-header";
import styles from "./profile-page.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/actions/auth";
import { useState } from "react";
import { setUserData } from "../../../services/actions/user";

export function ProfilePage() {
  const user = useSelector((store) => store.user.user);
  const [editForm, setEditForm] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: "123456",
  });
  const mainClassNames = classNames(`${styles.main} container`);
  const textClassNames = classNames(
    `${styles.text} text text_type_main-default mt-20`
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    const token = localStorage.getItem("refreshKey");
    dispatch(logout(JSON.parse(token)));
    navigate("/login");
  };
  const handleEditClick = () => {
    setEditForm(!editForm);
  };
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUserSaveClick = () => {
    setEditForm(false);
    setForm(form);
    dispatch(setUserData(form));
  };
  const handleCancelEditClick = () => {
    setEditForm(false);
    setForm({
      name: user.name,
      email: user.email,
      password: "123456",
    });
  };
  return (
    <>
      <AppHeader />
      <main className={mainClassNames}>
        <div className={styles.tabs}>
          <Tab value="profile" active="true">
            Профиль
          </Tab>
          <Link to={{ pathname: "/profile/orders" }}>
            <Tab value="history">История заказов</Tab>
          </Link>
          <Tab value="logout" onClick={handleLogoutClick}>
            Выход
          </Tab>
          <p className={textClassNames}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div className={styles.target}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            value={form.name}
            onIconClick={handleEditClick}
            onChange={onChangeInput}
            icon={"EditIcon"}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            disabled={!editForm}
          />
          <EmailInput
            value={form.email}
            name={"email"}
            placeholder="Логин"
            onIconClick={handleEditClick}
            onChange={onChangeInput}
            isIcon={true}
            extraClass="mb-6"
            disabled={!editForm}
          />
          <PasswordInput
            value={form.password}
            name={"password"}
            onIconClick={handleEditClick}
            onChange={onChangeInput}
            extraClass="mb-6"
            icon={"EditIcon"}
            disabled={!editForm}
          />
          {editForm && (
            <>
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                onClick={handleCancelEditClick}
              >
                Отмена
              </Button>
              <Button
                htmlType="button"
                type="primary"
                size="medium"
                onClick={handleUserSaveClick}
              >
                Сохранить
              </Button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
