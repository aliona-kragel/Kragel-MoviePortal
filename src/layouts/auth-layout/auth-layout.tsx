
import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useCommonActions from '../../hooks/use-common-actions';
import { ACCESS_TOKEN, Paths } from '../../constants';

import styles from './styles.module.scss';

export const AuthLayout: FC = () => {
  const { setLoggedIn } = useCommonActions();

  useEffect(() => {
    const token: string | null = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      setLoggedIn(true);
      localStorage.setItem(ACCESS_TOKEN, token);
    }
  }, [])

  return (
    <section className={styles.auth}>
      <Outlet />
    </section>
  )
}