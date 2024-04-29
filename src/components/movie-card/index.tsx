import { FC, PropsWithChildren, useState } from 'react';
import { Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { MovieCardPrors } from '../../types/types';
import useWindowResize from '../../hooks/use-window-resize';
import { Rating } from '../rating';

import styles from "./styles.module.scss"

const { Meta } = Card;

export const MovieCard: FC<PropsWithChildren<MovieCardPrors>> = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const { isFullscreen } = useWindowResize();

  return (
    <Card
      hoverable
      className={styles.card}
      styles={{ body: { padding: "16px" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      cover={
        <img alt={data.nameOriginal}
          src={data.posterUrlPreview}
          style={{ height: isFullscreen ? 350 : "auto" }} />
      }
    >
      {hovered && (
        <div className={styles.overlay}>
          <EyeOutlined style={{ color: "#69b1ff", fontSize: 64 }} />
        </div>
      )}
      <Meta
        title={data.nameRu || data.nameOriginal}
        description={<Rating rating={data.ratingKinopoisk || data.ratingImdb} value={(data.ratingKinopoisk || data.ratingImdb) / 2} count={5} />} />
    </Card >
  )
}