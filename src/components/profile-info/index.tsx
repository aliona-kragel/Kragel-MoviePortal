import { useEffect } from "react";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { ACCESS_TOKEN, USER_DATA } from "../../constants";
import useCommonActions from "../../hooks/use-common-actions";
import { useAppSelector } from "../../hooks/use-app-selector";

import styles from "./styles.module.scss";

export const ProfileInfo = () => {
  const { userData } = useAppSelector(state => state.common);
  const { setUserData, setLoggedIn } = useCommonActions()
  const localStorageData = localStorage.getItem(USER_DATA);

  useEffect(() => {
    if (!!localStorageData) {
      const userData = JSON.parse(localStorageData)
      setUserData(userData)
    };
    console.log(userData);
  }, [localStorageData])

  const onLogoutClick = () => {
    localStorage.removeItem(USER_DATA);
    localStorage.removeItem(ACCESS_TOKEN);
    setUserData({
      email: "",
      password: ""
    })
    setLoggedIn(false)
  }

  return (
    <div className={styles.profile}>
      <div className={styles.user}>
        <span className={styles.email}>{userData.email}</span>
        <Avatar icon={<UserOutlined style={{ color: "#4096ff" }} />} />
      </div >
      <Button type="text" onClick={onLogoutClick}>
        <LogoutOutlined style={{ fontSize: 24, color: "#4096ff" }} />
      </Button>
    </div>
  )
}