import { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../hooks/use-app-selector";
import { Pagination } from "../../components/pagination";
import { MovieList } from "../../components/movie-list";
import { SearchField } from "../../components/search-field";
import { REQUEST_LIMIT } from "../../constants";
import { TagFilter } from "../../components/tag-filter";
import { useDebounce } from "use-debounce";

import styles from "./styles.module.scss";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState("");
  const [debouncedInputValue] = useDebounce(searchString, 1000);
  const { movieList, isDataLoading, selectedMovieTag } = useAppSelector(state => state.movie);
  const totalPages = Math.ceil(Number(movieList?.total) / REQUEST_LIMIT);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <TagFilter />
        <SearchField searchString={searchString} setSearchString={setSearchString} />
      </div>
      <MovieList searchString={debouncedInputValue} page={currentPage} type={selectedMovieTag} />
      {!isDataLoading &&
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
      }
    </section>
  );
}