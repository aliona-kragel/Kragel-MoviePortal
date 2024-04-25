import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "antd";
import useMovieActions from "../../hooks/use-movie-actions";
import { useAppSelector } from "../../hooks/use-app-selector";
import { Paths, REQUEST_LIMIT } from "../../constants";
import { MovieCard } from "../movie-card";
import { EmptyBlock } from "../empty-block";
import { MovieListType } from "../../types/types";

import styles from "./styles.module.scss";

export const MovieList: FC = () => {
  const { movieList } = useAppSelector(state => state.movie);
  const { setSelectedMovie } = useMovieActions();
  const navigate = useNavigate();

  const handleCardClick = (data: MovieListType) => {
    setSelectedMovie(data.kinopoiskId);
    navigate(Paths.DETAILS);
  };

  return (
    <List className={styles.cards}
      grid={{ gutter: REQUEST_LIMIT, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5, }}
      dataSource={movieList?.items}
      locale={{ emptyText: <EmptyBlock /> }}
      renderItem={(data) => (
        <List.Item onClick={() => handleCardClick(data)}>
          <MovieCard key={data.kinopoiskId} data={data} />
        </List.Item>
      )} />
  )
}