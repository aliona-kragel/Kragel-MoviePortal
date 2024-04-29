import { FC, useEffect } from "react";
import CheckableTag from "antd/lib/tag/CheckableTag";
import useMovieActions from "../../hooks/use-movie-actions";
import { useAppSelector } from "../../hooks/use-app-selector";
import { SearchFieldProps } from "../../types/types";
import { useGetMovieByTypeQuery } from "../../services";
import { allowedFilterList } from "../../helpers";

import styles from "./styles.module.scss";

export const TagFilter: FC<SearchFieldProps> = ({ currentPage }) => {
  const { setSelectedMovieTag, setIsDataLoading, setMovieList } = useMovieActions()
  const { selectedMovieTag } = useAppSelector(state => state.movie);
  const { data, isLoading } = useGetMovieByTypeQuery({ type: selectedMovieTag, page: currentPage });

  const handleChange = (tagName: string, checked: boolean) => {
    checked ? setSelectedMovieTag(tagName) : setSelectedMovieTag("ALL");
  };

  useEffect(() => {
    setIsDataLoading(isLoading);
    setMovieList(data);
  }, [data, isLoading])

  return (
    <div className={styles.filter}>
      {allowedFilterList.map(tag =>
        <CheckableTag
          key={tag.key}
          checked={selectedMovieTag === tag.key}
          style={selectedMovieTag === tag.key
            ? { border: '1px solid #2f54eb', background: "rgb(255, 255, 255, 0.4)", color: "#2f54eb", lineHeight: "30px" }
            : { border: '1px solid #f0f0f0', color: "#f0f0f0", lineHeight: "30px" }
          }
          onChange={checked => handleChange(tag.key, checked)}>
          {tag.name}
        </CheckableTag>)}
    </div>
  )
}