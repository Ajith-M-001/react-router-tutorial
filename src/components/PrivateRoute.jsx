import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
