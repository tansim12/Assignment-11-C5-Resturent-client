import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import useAuthContext from "../../Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuthContext();
  const loc = useLocation();
  if (userLoading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to={"/login"} state={loc?.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
