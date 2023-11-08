import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./useAuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
const useAxiosHook = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Unauthorized or Forbidden request. Logging out...");
          logOut()
            .then(() => {
              console.log("Logged out successfully");
              toast.error("Log Out");
              navigate("/login");
            })
            .catch((err) => {
              console.log("Error during logout:", err);
            });
        }
        console.log("Request error:", error);
      }
    );
  }, [logOut, navigate]);

  return instance;
};

export default useAxiosHook;
