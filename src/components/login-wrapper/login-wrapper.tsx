import { FC, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from 'antd';
import { Paths } from "../../constants";

import styles from "./styles.module.scss";

const navLinks = [
  {
    label: <Link to={Paths.AUTH}>Вход</Link>,
    key: "login"
  },
  {
    label: <Link to={Paths.REGISTRATION}>Регистрация</Link>,
    key: "registration"
  }
]

export const LoginWrapper: FC = () => {
  const [current, setCurrent] = useState('login');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("registration")) {
      setCurrent('registration');
    } else setCurrent('login');
  }, [location.pathname])

  return (
    <div className={styles.login}>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        items={navLinks}
        disabledOverflow
        rootClassName={styles.login__navigation}
      />
      <Outlet />
    </div>
  )
}