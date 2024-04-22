import { useState } from "react";
import { MovieCard } from "../../components/movie-card";
import { useGetMoviesQuery } from "../../services";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Pagination } from "../../components/pagination";
import { Loader } from "../../components/loader";

import styles from "./styles.module.scss";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const { data, isLoading } = useGetMoviesQuery({ page: currentPage, limit });
  const totalPages = Math.ceil(Number(data?.totalResults) / limit);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className={styles.main}>
      {isLoading ?
        <Loader /> :
        <>
          <div className={styles.cards} >
            {data && data.Search.map((item) => <MovieCard key={item.imdbID} data={item} />)
            }
          </div >
          <div className={styles.pagination}>
            <Button type="text" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <LeftOutlined />
            </Button>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            <Button type="text" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              <RightOutlined />
            </Button>
          </div>
        </>}
    </div>

  );
}