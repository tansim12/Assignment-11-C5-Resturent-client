import toast from "react-hot-toast";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosHook from "../../Hooks/useAxiosHook";
import { AiOutlineLogout } from 'react-icons/ai';

const LogOut = () => {
  const { logOut } = useAuthContext();
  const instance = useAxiosHook();
  // handleLogout
  const handleLogout = async () => {
    const toastId = toast.loading("Logout Successfully done");
    try {
      await logOut()
        .then(() => {
          instance.post("/removeCookie").then((res) => {
            console.log(res);
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
       <span className="mr-3"> Log out </span> <span><AiOutlineLogout></AiOutlineLogout></span>
      </div>
    </div>
  );
};

export default LogOut;
