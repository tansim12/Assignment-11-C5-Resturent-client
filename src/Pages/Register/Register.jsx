import { Link, useNavigate } from "react-router-dom";
import LoginWith from "../../Components/LoginWith/LoginWith";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const patten = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,}$/;
  const capital = /[A-Z]/;
  // handleRegister
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const email = form.email.value;

    // verify validation
    if (password !== confirmPassword) {
      return toast.error("Password don't match.");
    }
    if (!capital.test(password)) {
      return toast.error("Password should be one capital letter");
    }
    if (password.length < 6) {
      return toast.error("Password not should be 6 characters");
    }
    if (!patten.test(password)) {
      return toast.error("Password not should be one special  characters '@'");
    }

    // console.log(name, email, password, confirmPassword);
    const toastId = toast.loading("Register Successfully done");
    try {
      await register(email, password)
        .then(() => {
          toast.success("Register Successfully done", { id: toastId });
          navigate("/login");
        })
        .catch((err) => toast.error(err.message, { id: toastId }));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
          <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
            {/* <!-- Title --> */}
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-500">
              Create Your Online Shop{" "}
              <span className="text-blue-600 dark:text-blue-500">Products</span>
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Join our platform to start selling your products online. Register
              now and grow your e-commerce business with us!
            </p>
            {/* <!-- End Title --> */}

            {/* login with section  */}
            <div>
              <LoginWith></LoginWith>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-gray-800 dark:text-black ">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-bold text-blue-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>

            {/* <!-- Form --> */}
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Full name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  id="hs-hero-name-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="img"
                  id="hs-hero-name-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Photo URL"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="hs-hero-email-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  id="hs-hero-password-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  id="hs-hero-password-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Confirm-Password"
                />
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>

        <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
        {/* <!-- End Col --> */}
      </div>

      <div></div>
      {/* <!-- End Hero --> */}
    </div>
  );
};

export default Register;
