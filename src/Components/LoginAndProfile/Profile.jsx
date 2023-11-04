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
          className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge badge-neutral">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
