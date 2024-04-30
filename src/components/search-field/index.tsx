import { FC } from "react";
import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { SearchFieldProps } from "../../types/types";

import styles from "./styles.module.scss";

export const SearchField: FC<SearchFieldProps> = ({ searchString, setSearchString }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value);

  return (
    <div className={styles.search}>
      <Input
        variant="borderless"
        placeholder="Поиск по названию"
        value={searchString}
        onChange={handleInputChange}
        data-test-id="search-input"
        addonBefore={<SearchOutlined style={{ color: "#69b1ff" }} />}
      />
    </div>
  )
}