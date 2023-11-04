import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import loginAnimation from "../../assets/loginLotteFiles.json";
import Lottie from "lottie-react";
import LoginWith from "../../Components/LoginWith/LoginWith";
import useAuthContext from "../../Hooks/useAuthContext";

const Login = () => {
  const { login } = useAuthContext();
//   const patten = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,}$/;
//   const capital = /[A-Z]/;
  const navigate = useNavigate();
  const loc = useLocation();

  // handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // if (!capital.test(password)) {
    //   return toast.error("Password should be one capital letter");
    // }
    // if (password.length < 6) {
    //   return toast.error("Password not should be 6 characters");
    // }
    // if (!patten.test(password)) {
    //   return toast.error("Password not should be one special  characters '@'");
    // }
    const toastId = toast.loading("Login Successfully done");
    login(email, password)
      .then(() => {
        toast.success("Login successfully done" , {id: toastId});
        navigate(loc?.state ? loc?.state : "/");
      })
      .catch(() => toast.error("Invalid user ." , {id :toastId}));
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 pb-5 pt-24">
      <div className=" md:flex justify-around gap-5 items-center  ">
        <div>
          <Lottie
            animationData={loginAnimation}
            loop={true}
            autoPlay={true}
          ></Lottie>
        </div>
        <div className="flex flex-col mt-10 md:mt-0 max-w-full p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm dark:text-gray-400">
              Login to access your account
            </p>
          </div>
          <form className="space-y-12" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                  <Link
                    rel="noopener noreferrer"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full btn  px-8 py-3 font-semibold rounded-md dark:text-gray-900 "
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div>
            <LoginWith></LoginWith>
            <p className=" my-2 px-6 text-sm text-center dark:text-gray-400">
              Do not have an account yet?
              <Link
                rel="noopener noreferrer"
                to={"/register"}
                className="hover:underline dark:text-violet-400 "
              >
                Register
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
