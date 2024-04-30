import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { ACCESS_TOKEN, Paths, USER_DATA } from "../../constants";
import useCommonActions from "../../hooks/use-common-actions";
import { useAppSelector } from "../../hooks/use-app-selector";

import styles from "./styles.module.scss";


export const ProfileInfo = () => {
  const { userData } = useAppSelector(state => state.common);
  const { setUserData } = useCommonActions()
  const localStorageData = localStorage.getItem(USER_DATA);
  const token = localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();

  useEffect(() => {
    if (token && localStorageData) {
      const userData = JSON.parse(localStorageData);
      setUserData(userData);
    }
  }, [token, localStorageData]);

  const onLogoutClick = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate(Paths.AUTH)
    setUserData({
      email: "",
      password: ""
    })
  }

  return (
    <div className={styles.profile}>
      <div className={styles.user}>
        <span className={styles.email}>{userData.email}</span>
        <Avatar icon={<UserOutlined style={{ color: "#69b1ff" }} />} />
      </div >
      <Button type="text" onClick={onLogoutClick} style={{ padding: "4px" }}>
        <LogoutOutlined style={{ fontSize: 24, color: "#69b1ff" }} />
      </Button>
    </div>
  )
}