import { FC } from "react";
import { Tag } from "antd";
import { FavMovieData, MovieInfoProps } from "../../types/types";
import { useGetStaffDetailsQuery } from "../../services";
import { useAppSelector } from "../../hooks/use-app-selector";
import { getStaffNames } from "../../helpers";
import { Rating } from "../rating";
import { LikeButton } from "../like-button";

import styles from "./styles.module.scss";

const MovieInfo: FC<MovieInfoProps> = ({ detailsData }) => {
  const { selectedMovieID } = useAppSelector(state => state.movie);
  const { data: staffData } = useGetStaffDetailsQuery({ selectedMovieID });
  const { countries, genres, ratingAgeLimits, ratingKinopoisk, ratingImdb, shortDescription, description, posterUrl, year, nameOriginal, nameRu } = detailsData || {};

  const countryValue = countries.map(el => el.country);
  const genreValue = genres.map(el => el.genre);
  const directorValue = getStaffNames(staffData, "DIRECTOR");
  const actorsValue = getStaffNames(staffData, "ACTOR");
  const producerValue = getStaffNames(staffData, "PRODUCER");
  const ageLimit = ratingAgeLimits === null ? undefined : parseInt((ratingAgeLimits || '').replace(/\D/g, ""), 10) || 0;

  const movieDetails = [
    {
      label: "Дата выхода",
      value: year,
      id: 1,
    },
    {
      label: "Страна",
      value: countryValue,
      id: 2,
    },
    {
      label: "Жанр",
      value: genreValue,
      id: 3,
    },
    {
      label: "Режиссер",
      value: directorValue,
      id: 4,
    },
    {
      label: "В главных ролях",
      value: actorsValue,
      id: 5,
    },
    {
      label: "Продюсеры",
      value: producerValue,
      id: 6,
    },
  ]
  const favMovieData: FavMovieData = {
    id: selectedMovieID,
    name: nameOriginal || nameRu,
    poster: posterUrl,
    rating: ratingKinopoisk || ratingImdb,
    desc: shortDescription || description
  }

  const filteredMovieDetails = movieDetails.filter(detail => {
    if (detail.value === undefined) return false;

    if (Array.isArray(detail.value)) {
      return detail.value.length > 0;
    } else {
      return detail?.value > 0;
    }
  });
  return (
    <div className={styles.info}>
      <div className={styles.poster}>
        <img
          className={styles.img}
          src={posterUrl}
          alt={nameOriginal}
        />
        <div className={styles.rating}> <Rating rating={ratingKinopoisk || ratingImdb} count={10} value={ratingKinopoisk || ratingImdb} /></div>
        <LikeButton data={favMovieData} />
      </div>
      <div className={styles.resume}>
        {filteredMovieDetails.map(el => (
          <div className={styles.row} key={el.id}>
            <p className={styles.row__name}>{el.label}:</p>
            <div className={styles.row__list}>
              {Array.isArray(el.value) ? (
                el.value.map((item, i) => (<Tag key={i} style={{ background: "rgb(255, 255, 255, 0.1)", color: "white" }}>{item}</Tag>))
              ) : (
                <Tag style={{ background: "rgb(255, 255, 255, 0.1)", color: "white" }}>{el.value}</Tag>
              )}
            </div>
          </div>
        ))}
        {ageLimit !== undefined && (
          <div className={styles.ageLimit}>{ageLimit}+</div>
        )}
        <div className={styles.desc}>
          <p> {shortDescription}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;