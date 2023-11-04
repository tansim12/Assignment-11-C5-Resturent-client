
import toast from "react-hot-toast";
import useAuthContext from "../../Hooks/useAuthContext";
const LogOut = () => {
    const { logOut } = useAuthContext();
    // handleLogout
    const handleLogout = async () => {
      const toastId = toast.loading("Logout Successfully done");
      try {
        await logOut()
          .then(() => toast.success("Login Successfully done", { id: toastId }))
          .catch((err) => toast.error(err.message, { id: toastId }));
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div>
      <div 
      onClick={handleLogout}
      className="flex items-center justify-center gap-2 bg-secondary btn-sm btn sm:btn-md transition-all ease-in delay-100 border-none hover:btn-neutral text-white font-bold  ">
        Log out
      </div>
    </div>
  );
};

export default LogOut;
