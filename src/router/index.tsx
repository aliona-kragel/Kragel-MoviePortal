import { Route, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { PublicRoutes } from "./public-routes";
import { AuthLayout } from "../layouts/auth-layout/auth-layout";
import { MainLayout } from "../layouts/main-layout/main-layout";
import { Paths } from "../constants";
import { LoginWrapper } from "../components/login-wrapper/login-wrapper";
import { LoginForm } from "../components/login-form/login-form";
import { RegistrationForm } from "../components/registration-form";
import { MainPage } from "../pages/main-page/main-page";

export const routes = createHashRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainLayout />}>
      <Route path={Paths.MAIN} element={<MainPage />} />
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