import Lottie from "lottie-react";
import errorAnimation from "../../assets/errorAnimation.json";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Lottie
          className="w-full h-[70vh]"
          animationData={errorAnimation}
          loop={true}
          autoplay={true}
        ></Lottie>
      </div>
      <div className="text-center my-5">
        <div>
          <Link
            to={"/"}
            className="bg-secondary btn transition-all ease-in delay-100 border-none hover:btn-neutral text-white font-bold  "
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
