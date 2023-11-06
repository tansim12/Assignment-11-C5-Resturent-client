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
          logOut()
            .then(() => {
              toast.error("Log Out");
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
        console.log(error);
      }
    );
  }, [logOut, navigate]);

  return instance;
};

export default useAxiosHook;
