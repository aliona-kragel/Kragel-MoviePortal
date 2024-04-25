import { FC, PropsWithChildren } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { PaginationProps } from "../../types/types";

import styles from "./styles.module.scss";

export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({ totalPages, currentPage, onPageChange }) => {

  const getDisabledButtonStyles = (isDisabled: boolean) => {
    return {
      fontSize: "16px",
      color: isDisabled ? '#69b1ff' : 'none',
      fontWeight: isDisabled ? '700' : 'normal',
      borderColor: isDisabled ? '#69b1ff' : 'none',
    };
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    let isEllipsisAdded = false;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === currentPage || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        buttons.push(
          <button
            className={styles.button}
            key={i}
            onClick={() => onPageChange(i)}
            style={i === currentPage ? getDisabledButtonStyles(i === currentPage) : {}}
            disabled={i === currentPage}
          >
            {i}
          </button>
        );
      }
      if ((i === 2 && currentPage > 4) || (i === totalPages - 1 && currentPage < totalPages - 3) || (i > 2 && i < totalPages - 1 && Math.abs(i - currentPage) > 1)) {
        if (!isEllipsisAdded) {
          buttons.push(<span key={`dots${i}`}><EllipsisOutlined /></span>);
          isEllipsisAdded = true;
        }
      } else {
        isEllipsisAdded = false;
      }
    }
    return buttons;
  };

  return (
    <div className={styles.buttons}>
      {generatePaginationButtons()}
    </div>
  );
};
