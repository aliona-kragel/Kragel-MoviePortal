import { NavLink } from "react-router-dom";
import { PlayCircleFilled } from "@ant-design/icons";
import { Paths } from "../../constants";

import styles from "./styles.module.scss";

export const Logo = () => {
  return (
    <NavLink to={Paths.MAIN} className={styles.logo}>
      <PlayCircleFilled color="rgba(22,119,255,1)" width={48} />
      <h3>KMovie</h3>
    </NavLink>
  )
}