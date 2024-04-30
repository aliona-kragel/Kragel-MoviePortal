import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "../../components/header";
import { Paths } from "../../constants";
import { ErrorFallback } from "../../components/error-fallback";
import { ThemeContext } from "../../context/theme-context";

import styles from "./styles.module.scss";

export const MainLayout = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const isLocalhost = "http://localhost:3000/Kragel-MoviePortal";
    const isGitHubPages = "https://aliona-kragel.github.io/Kragel-MoviePortal/";
    if (window.location.href === isLocalhost || window.location.href === isGitHubPages) {
      navigate(Paths.MAIN);
    }
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section className={`${styles.main} ${styles[theme]}`}>
        <Header />
        <div className={styles.container}>
          <Outlet />
        </div>
      </section>
    </ErrorBoundary>
  )
}
