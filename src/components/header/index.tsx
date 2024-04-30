import { Logo } from "../logo";
import { NavMenu } from "../nav-menu";
import styles from "./styles.module.scss";
import { HeaderControls } from "../header-controls";
import { ProfileInfo } from "../profile-info";
import { ACCESS_TOKEN } from "../../constants";
import { ThemeSwitcher } from "../theme-switcher";

export const Header = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <Logo />
        <NavMenu />
        <ThemeSwitcher />
      </div>
      {token ? <ProfileInfo /> : <HeaderControls />}
    </header>
  )
}