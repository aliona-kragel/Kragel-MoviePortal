
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/use-app-selector";
import { ACCESS_TOKEN, Paths } from "../constants";

const useAuth = () => {
  const { isLoggedIn } = useAppSelector(state => state.common)
  const token = localStorage.getItem(ACCESS_TOKEN);

  if (token || isLoggedIn) {
    return true;
  } else {
    return false;
  }
};

export const PublicRoutes = () => {
  const auth = useAuth();
  return auth ? <Navigate to={Paths.MAIN} /> : <Outlet />;
};

