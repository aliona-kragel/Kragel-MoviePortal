import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { LinkItemProps } from "../../types/types";

import styles from "./styles.module.scss";

export const LinkItem: FC<PropsWithChildren<LinkItemProps>> = ({ children, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`}>
      {children}
    </NavLink>
  )
}


