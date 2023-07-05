import classNames from "classnames";
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
import { logout } from "../../services/actions/auth";
import { useState, FC, FormEvent } from "react";
import { setUserData } from "../../services/actions/user";
import { useForm } from "../../services/hooks/useForm";
import { TClassnames } from "../../services/types/types";

export const ProfilePage: FC = () => {
  const mainClassNames: TClassnames = classNames(`${styles.main} container`);
  const textClassNames: TClassnames = classNames(
    `${styles.text} text text_type_main-default mt-20`
  );
  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const user = useSelector((store: any) => store.user.user);
  const [editForm, setEditForm] = useState(false);
  const { values, handleChange, setValues } = useForm({
    name: user.name,
    email: user.email,
    password: "123456",
  }) as any;
  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  const handleEditClick = () => {
    setEditForm(!editForm);
  };
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditForm(false);
    setValues(values);
    dispatch(setUserData(values));
  };
  const handleCancelEditClick = () => {
    setEditForm(false);
    setValues({
      name: user.name,
      email: user.email,
      password: "123456",
    });
  };
  return (
    <main className={mainClassNames}>
      <div className={styles.tabs}>
        <Tab value="profile" active={true} onClick={() => null}>
          Профиль
        </Tab>
        <Link to={{ pathname: "/profile/orders" }}>
          <Tab value="history" active={false} onClick={() => null}>
            История заказов
          </Tab>
        </Link>
        <Tab value="logout" onClick={handleLogoutClick} active={false}>
          Выход
        </Tab>
        <p className={textClassNames}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.target} onSubmit={(e) => onSubmitForm(e)}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={values.name}
          onIconClick={handleEditClick}
          onChange={handleChange}
          icon={"EditIcon"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          disabled={!editForm}
        />
        <EmailInput
          value={values.email}
          name={"email"}
          placeholder="Логин"
          // onIconClick={handleEditClick}
          onChange={handleChange}
          isIcon={true}
          extraClass="mb-6"
          disabled={!editForm}
        />
        <PasswordInput
          value={values.password}
          name={"password"}
          // onIconClick={handleEditClick}
          onChange={handleChange}
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
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </>
        )}
      </form>
    </main>
  );
};
