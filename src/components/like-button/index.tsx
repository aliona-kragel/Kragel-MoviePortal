import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ACCESS_TOKEN, FAVORITES, Paths } from "../../constants";
import { FavMovieData, LikedMovie } from "../../types/types";

export const LikeButton: FC<LikedMovie> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const token = localStorage.getItem(ACCESS_TOKEN);
  const favoritesJSON = localStorage.getItem(FAVORITES);
  const favorites: FavMovieData[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
  const navigate = useNavigate();

  const toggleLike = () => {
    if (!token) navigate(Paths.AUTH);

    if (isLiked) {
      const updatedFavorites = favorites.filter((movie) => movie.id !== data.id);
      localStorage.setItem(FAVORITES, JSON.stringify(updatedFavorites));
      setIsLiked(false);
    } else {
      const updatedFavorites = [...favorites, data];
      localStorage.setItem(FAVORITES, JSON.stringify(updatedFavorites));
      setIsLiked(true);
    }
  };

  useEffect(() => {
    const isMovieLiked = favorites.some((movie: any) => movie.id === data.id);
    setIsLiked(isMovieLiked);
  }, [data, favorites]);

  return (
    <Button ghost onClick={toggleLike} size="large" color="#69b1ff">
      {isLiked ? <><HeartFilled style={{ marginRight: 10 }} /> Удалить из избранного </> : <><HeartOutlined style={{ marginRight: 10 }} /> Добавить в избранное</>}
    </Button>
  );
}