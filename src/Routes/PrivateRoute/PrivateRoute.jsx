import { Navigate } from "react-router-dom";

import useAuthContext from "../../Hooks/useAuthContext";
import LoadingSkeleton from "../../Pages/LoadingSkeleton/LoadingSkeleton";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuthContext();

  if (userLoading) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }
  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
