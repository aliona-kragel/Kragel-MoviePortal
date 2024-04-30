import { lazy, Suspense } from 'react';
import styles from "./styles.module.scss";
import { Loader } from '../../components/loader';

const FavoritesList = lazy(() => import("../../components/favorites-list"));

export const FavoritesPage = () => {

  return (
    <section className={styles.favourites}>
      <Suspense fallback={<Loader />}>
        <FavoritesList />
      </Suspense>
    </section>
  )
}