import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Header } from "../../components/header";
import { useEffect } from "react";
import { Paths } from "../../constants";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components/error-fallback";

export const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLocalhost = "http://localhost:3000/Kragel-MoviePortal";
    const isGitHubPages = "https://aliona-kragel.github.io/Kragel-MoviePortal/";
    if (window.location.href === isLocalhost || window.location.href === isGitHubPages) {
      navigate(Paths.MAIN);
    }
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section className={styles.main}>
        <Header />
        <div className={styles.container}>
          <Outlet />
        </div>
      </section>
    </ErrorBoundary>
  )
}
