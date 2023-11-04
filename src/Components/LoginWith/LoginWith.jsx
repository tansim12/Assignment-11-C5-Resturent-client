import toast from "react-hot-toast";
import useAuthContext from "../../Hooks/useAuthContext";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWith = () => {
  const { googleLogin } = useAuthContext();
  const navigate = useNavigate();
  const loc = useLocation();
  //   handleGoogleLogin
  const handleGoogleLogin = (media) => {
    const toastId = toast.loading("Login Successfully done");
    media()
      .then(() => {
        toast.success("Login Successfully done", { id: toastId });
        navigate(loc?.state ? loc?.state : "/");
      })
      .catch((err) => toast.error(err.message, { id: toastId }));
  };
  return (
    <div onClick={() => handleGoogleLogin(googleLogin)} className="mt-8 grid">
      <button
        type="button"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <FcGoogle className="text-4xl"></FcGoogle>
        Sign up with Google
      </button>
    </div>
  );
};

export default LoginWith;
