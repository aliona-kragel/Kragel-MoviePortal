import { useEffect, useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useMovieActions from "../../hooks/use-movie-actions";
import { useAppSelector } from "../../hooks/use-app-selector";
import { Pagination } from "../../components/pagination";
import { Loader } from "../../components/loader";
import { MovieList } from "../../components/movie-list";
import { SearchField } from "../../components/search-field";
import { useGetMoviesQuery } from "../../services";
import { REQUEST_LIMIT } from "../../constants";

import styles from "./styles.module.scss";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { setMovieList, setIsDataLoading } = useMovieActions();
  const { movieList, isDataLoading } = useAppSelector(state => state.movie);
  const { data, isLoading } = useGetMoviesQuery({ page: currentPage });
  const totalPages = Math.ceil(Number(movieList?.total) / REQUEST_LIMIT);

  useEffect(() => {
    setMovieList(data);
    setIsDataLoading(isLoading);
  }, [data, isLoading])

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <section className={styles.main}>
      <SearchField currentPage={currentPage} />
      {isDataLoading ?
        <Loader /> :
        <>
          <MovieList />
          <div className={styles.pagination}>
            {(movieList && movieList?.total >= 20) &&
              <>
                <Button type="text" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <LeftOutlined />
                </Button>
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                <Button type="text" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <RightOutlined />
                </Button>
              </>}
          </div>
        </>
      }
    </section>
  );
}