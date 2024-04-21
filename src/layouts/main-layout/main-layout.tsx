import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Header } from "../../components/header";
import { useEffect } from "react";
import { Paths } from "../../constants";

export const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      navigate(Paths.MAIN);
    }
  }, []);

  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </section>
  )
}
