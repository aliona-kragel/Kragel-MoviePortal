import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { Paths } from "../../constants";

import styles from "./styles.module.scss";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFound}>
      <Result
        title="Извините, страница не найдена, возможно, она была удалена или перемещена."
        icon={<FrownOutlined />}
        extra={
          <Button type="primary" size="large" ghost onClick={() => navigate(Paths.MAIN)}>
            На главную
          </Button>
        }
      />
    </section>
  )
}