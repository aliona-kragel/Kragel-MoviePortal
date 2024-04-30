import { FC } from "react";
import { Rate } from "antd";
import { RatingProps } from "../../types/types";

import styles from "./styles.module.scss"

export const Rating: FC<RatingProps> = ({ rating, count, value }) => (
  <div className={styles.rate}>
    <Rate value={value} allowHalf count={count} />
    <span className={styles.value}>{rating}</span>
  </div>
)