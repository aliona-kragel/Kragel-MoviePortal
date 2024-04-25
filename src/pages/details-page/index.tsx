import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../hooks/use-app-selector";
import { useGetMovieDetailsQuery } from "../../services";
import { Loader } from "../../components/loader";
import { Paths } from "../../constants";
import { MovieInfo } from "../../components/movie-info";

import styles from "./styles.module.scss";

export const DetailsPage: FC = () => {
  const { selectedMovieID } = useAppSelector(state => state.movie);
  const { data: detailsData, isLoading } = useGetMovieDetailsQuery({ selectedMovieID });
  const navigate = useNavigate();

  const handleBackClick = () => navigate(Paths.MAIN);

  return (
    <section className={styles.details}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.header}>
            <Button className={styles.back} type="link" onClick={handleBackClick}>
              <ArrowLeftOutlined style={{ fontSize: 32 }} />
            </Button>
            <h2 className={styles.title}>{detailsData?.nameRu || detailsData?.nameOriginal}</h2>
          </div>
          {detailsData && <MovieInfo detailsData={detailsData} />}
        </>
      )}
    </section>
  )
}