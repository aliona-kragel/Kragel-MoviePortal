
import { FC, useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import useCommonActions from '../../hooks/use-common-actions';
import { ACCESS_TOKEN, Paths } from '../../constants';

import styles from './styles.module.scss';

export const AuthLayout: FC = () => {
  const { setLoggedIn } = useCommonActions();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/" || window.location.href === "https://aliona-kragel.github.io/Kragel-MoviePortal/") {
      navigate(Paths.AUTH);
    }
  }, [navigate]);

  useEffect(() => {
    const token: string | null = searchParams.get(ACCESS_TOKEN);
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