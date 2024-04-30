import { Navigate, Route, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { PublicRoutes } from "./public-routes";
import { AuthLayout } from "../layouts/auth-layout/auth-layout";
import { MainLayout } from "../layouts/main-layout/main-layout";
import { Paths } from "../constants";
import { LoginWrapper } from "../components/login-wrapper/login-wrapper";
import { LoginForm } from "../components/login-form/login-form";
import { RegistrationForm } from "../components/registration-form";
import { MainPage } from "../pages/main-page/main-page";
import { DetailsPage } from "../pages/details-page";
import { NotFoundPage } from "../pages/not-found-page";
import { FavoritesPage } from "../pages/favorites-page";

export const routes = createHashRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainLayout />}>
      <Route path={Paths.MAIN} element={<MainPage />} />
      <Route path={Paths.DETAILS} element={<DetailsPage />} />
      <Route path={Paths.FAVORIVES} element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to={Paths.NOT_FOUND} />} />
      <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
    </Route >
    <Route element={<PublicRoutes />}>
      <Route element={<AuthLayout />} >
        <Route element={<LoginWrapper />} >
          <Route path={Paths.AUTH} element={<LoginForm />} />
          <Route path={Paths.REGISTRATION} element={<RegistrationForm />} />
        </Route>
      </Route>
    </Route>
  </>
))