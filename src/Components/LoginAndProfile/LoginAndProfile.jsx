import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import useAuthContext from "../../Hooks/useAuthContext";
import LogOut from "../Log out/LogOut";

const LoginAndProfile = () => {
  const { user } = useAuthContext();
  return (
    <section className="flex items-center gap-3">
      <div>
        <Profile></Profile>
      </div>

      <div>
        {!user ? (
          <Link to={"/login"}>
            <div className="flex items-center justify-center gap-2 bg-secondary btn-sm btn sm:btn-md transition-all ease-in delay-100 border-none hover:btn-neutral text-white font-bold  ">
              <FiLogIn></FiLogIn>
              <span>Login</span>
            </div>
          </Link>
        ) : (
          <LogOut></LogOut>
        )}
      </div>
    </section>
  );
};

export default LoginAndProfile;
