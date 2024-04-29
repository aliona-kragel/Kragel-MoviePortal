import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "antd";
import { FAVORITES, Paths } from "../../constants";
import { FavMovieData } from "../../types/types";
import useMovieActions from "../../hooks/use-movie-actions";
import { Rating } from "../../components/rating";
import { EmptyBlock } from "../../components/empty-block";
import useWindowResize from "../../hooks/use-window-resize";
import { ThemeContext } from "../../context/theme-context";

import styles from "./styles.module.scss";

export const FavoritesPage: FC = () => {
  const { setSelectedMovie } = useMovieActions();
  const { isFullscreen } = useWindowResize()
  const favoritesJSON = localStorage.getItem(FAVORITES);
  const { theme } = useContext(ThemeContext);
  const favorites: FavMovieData[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
  const navigate = useNavigate();

  const handleCardClick = (data: FavMovieData) => {
    setSelectedMovie(data.id);
    navigate(Paths.DETAILS);
  };

  return (
    <section className={styles.favourites}>
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={favorites}
        locale={{ emptyText: <EmptyBlock /> }}
        pagination={{
          pageSize: isFullscreen ? 10 : 5,
          align: "center"
        }}
        renderItem={(data) => (
          <List.Item
            onClick={() => handleCardClick(data)}
          >
            <List.Item.Meta
              avatar={
                <img
                  width={80}
                  alt="poster"
                  src={data.poster}
                />
              }
              title={<h3 style={{ color: theme === "light" ? "#262626" : "white" }}>{data.name}</h3>}
              description={
                <>
                  <p style={{ marginBottom: "4px", color: "#c3c3c3" }}>{data.desc}</p>
                  <Rating rating={data.rating} count={5} value={data.rating / 2} />
                </>
              }
            />
          </List.Item>
        )}
      />
    </section>
  )
}