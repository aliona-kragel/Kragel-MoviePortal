import { FC, useEffect, useState } from "react";
import { Input } from 'antd';
import { useGetMovieByNameQuery, useGetMoviesQuery } from "../../services";
import useMovieActions from "../../hooks/use-movie-actions";
import { useDebounce } from "use-debounce";
import useWindowResize from "../../hooks/use-window-resize";
import { SearchOutlined } from "@ant-design/icons";
import { SearchFieldProps } from "../../types/types";

import styles from "./styles.module.scss";

export const SearchField: FC<SearchFieldProps> = ({ currentPage }) => {
  const [searchString, setSearchString] = useState("");
  const { setMovieList, setIsDataLoading } = useMovieActions();
  const [debouncedInputValue] = useDebounce(searchString, 1000);
  const { data: allMovies, isLoading: isAllMoviesLoading } = useGetMoviesQuery({ page: currentPage });
  const { data: searchedMovie, isLoading: isSearchedMovieLoading } = useGetMovieByNameQuery({ searchString: debouncedInputValue });
  const { isFullscreen } = useWindowResize();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value);

  useEffect(() => {
    setIsDataLoading(isAllMoviesLoading || isSearchedMovieLoading);
  }, [isSearchedMovieLoading, isAllMoviesLoading]);

  useEffect(() => {
    if (debouncedInputValue === "") {
      setMovieList(allMovies);
    } else {
      setMovieList(searchedMovie);
    }
  }, [debouncedInputValue, allMovies, searchedMovie])

  return (
    <div className={styles.search}>
      <Input
        variant="borderless"
        placeholder="Поиск по названию"
        onChange={handleInputChange}
        style={{ maxWidth: isFullscreen ? "40%" : "100%" }}
        data-test-id="search-input"
        addonBefore={<SearchOutlined style={{ color: "#69b1ff" }} />}
      />
    </div>
  )
}