import { Logo } from "../logo";
import { NavMenu } from "../nav-menu";
import styles from "./styles.module.scss";
import { HeaderControls } from "../header-controls";
import { ProfileInfo } from "../profile-info";
import { ACCESS_TOKEN } from "../../constants";
import { useAppSelector } from "../../hooks/use-app-selector";

export const Header = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const { isLoggedIn } = useAppSelector(state => state.common)


  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <Logo />
        <NavMenu />
      </div>
      {token || isLoggedIn ? <ProfileInfo /> : <HeaderControls />}
    </header>
  )
}