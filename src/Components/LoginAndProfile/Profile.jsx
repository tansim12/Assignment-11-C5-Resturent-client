import { NavLink } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full  ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img
              src={`${
                user?.photoURL
                  ? user?.photoURL
                  : "/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }`}
              alt={user?.displayName}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-200 font-semibold  rounded-box w-56"
        >
          <li>
            <NavLink to={"/myAddedFood"}>My added food</NavLink>
          </li>
          <li className="my-2">
            <NavLink to={"/addAFoodItem"}>Add A food item</NavLink>
          </li>
          <li>
            <NavLink to={"/myOrder"}>My order</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
