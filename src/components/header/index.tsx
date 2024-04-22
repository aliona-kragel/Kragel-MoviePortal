import { Logo } from "../logo";
import { NavMenu } from "../nav-menu";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />
    </header>
  )
}