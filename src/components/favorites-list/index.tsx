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

const FavoritesList: FC = () => {
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
    <List
      className={styles.list}
      itemLayout="horizontal"
      dataSource={favorites}
      locale={{ emptyText: <EmptyBlock /> }}
      pagination={{
        pageSize: isFullscreen ? 10 : 6,
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
            title={<p style={{ color: theme === "light" ? "#262626" : "white", fontSize: 24 }}>{data.name}</p>}
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
  )
}

export default FavoritesList;