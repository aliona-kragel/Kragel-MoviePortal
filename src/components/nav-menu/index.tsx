import { Paths } from "../../constants";
import { LinkItem } from "../link-item";

import styles from "./styles.module.scss";

export const NavMenu = () => (
  <div className={styles.nav}>
    <LinkItem to={Paths.MAIN}>
      <span>Home</span>
    </LinkItem>
    <LinkItem to={Paths.FAVOURIVES}>
      <span>Favourites</span>
    </LinkItem>
  </div>
)