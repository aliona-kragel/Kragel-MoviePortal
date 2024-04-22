import { Card } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { MovieCardPrors, MovieListType } from '../../types/types';

const { Meta } = Card;

export const MovieCard: FC<PropsWithChildren<MovieCardPrors>> = ({ data }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={data.Poster} />}
      styles={{ body: { background: "rgb(255, 255, 255, 0.2)" } }}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  )
}