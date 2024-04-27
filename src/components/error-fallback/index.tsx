import { Button, Result } from "antd";

import styles from "./styles.module.scss";

export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error | null, resetErrorBoundary: () => void }) => (
  <section className={styles.error}>
    <Result
      status="500"
      title="Что-то пошло не так..."
      subTitle={error?.message}
      extra={
        <Button
          ghost
          type="primary"
          size="large"
          onClick={resetErrorBoundary}
        >
          Попробовать снова
        </Button>}
    />
  </section>
);