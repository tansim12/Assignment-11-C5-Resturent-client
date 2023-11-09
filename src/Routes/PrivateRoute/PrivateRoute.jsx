import { Navigate, useLocation } from "react-router-dom";

import useAuthContext from "../../Hooks/useAuthContext";
import LoadingSkeleton from "../../Pages/LoadingSkeleton/LoadingSkeleton";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuthContext();
const loc = useLocation()
  if (userLoading) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }
  if (!user) {
    return <Navigate to={"/login"} state={loc?.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
