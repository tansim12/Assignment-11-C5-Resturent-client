import toast from "react-hot-toast";
import useAuthContext from "../../Hooks/useAuthContext";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";

const LogOut = () => {
  const { logOut } = useAuthContext();

  // handleLogout
  const handleLogout = async () => {
    const toastId = toast.loading("Logout Successfully done");
    try {
      await logOut()
        .then(() => {
          axios
            .post("https://assingment-11-c5-server.vercel.app/api/v1/removeCookie")
            .then((res) => {
              // console.log(res);
              if (res.data.success) {
                toast.success("Lod out Successfully done", { id: toastId });
              }
            });
        })
        .catch((err) => toast.error(err.message, { id: toastId }));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div
        onClick={handleLogout}
        className="text-red-600 font-bold  flex justify-between items-center text-lg"
      >
        <span className="mr-3"> Log out </span>{" "}
        <span>
          <AiOutlineLogout></AiOutlineLogout>
        </span>
      </div>
    </div>
  );
};

export default LogOut;
