import { HeartFilled, HomeFilled } from "@ant-design/icons";
import { Paths } from "../../constants";
import useWindowResize from "../../hooks/use-window-resize";
import { LinkItem } from "../link-item";

import styles from "./styles.module.scss";

export const NavMenu = () => {
  const { width } = useWindowResize();
  return (
    <div className={styles.nav}>
      <LinkItem to={Paths.MAIN}>
        {width >= 768 ? <span>Главная</span> : <HomeFilled />}
      </LinkItem>
      <LinkItem to={Paths.FAVOURIVES}>
        {width >= 768 ? <span>Избранное</span> : <HeartFilled />}
      </LinkItem>
    </div>
  )
}