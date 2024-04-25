import { LoadingOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";

export const Loader = () => (
  <div className={styles.loader} >
    <LoadingOutlined style={{ fontSize: '48px', color: 'white' }} />
  </div>
)