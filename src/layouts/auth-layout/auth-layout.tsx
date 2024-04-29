
import { FC, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../components/error-fallback';
import { ThemeContext } from '../../context/theme-context';

import styles from './styles.module.scss';

export const AuthLayout: FC = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const token: string | null = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
    }
  }, [])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section className={`${styles.auth} ${styles[theme]}`}>
        <Outlet />
      </section>
    </ErrorBoundary>
  )
}