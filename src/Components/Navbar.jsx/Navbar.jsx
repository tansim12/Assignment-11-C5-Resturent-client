import { NavLink } from "react-router-dom";
import "./navbar.css";
import LoginAndProfile from "../LoginAndProfile/LoginAndProfile";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="drawer z-50  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}

          <div className="w-full navbar  navbarBlur  ">
            <div className=" w-full max-w-screen-xl px-[25px] mx-auto bg-opacity-100  ">
              <div className="flex-none lg:hidden ">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <div>
                  <img
                    src="https://demo.xpeedstudio.com/marketov2/home4/wp-content/uploads/sites/4/2018/05/logo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-none hidden lg:block">
                <div className=" menu menu-horizontal">{links}</div>
              </div>
              <div className="ml-5">
                <LoginAndProfile></LoginAndProfile>
              </div>
            </div>
          </div>

          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-64 sm:w-80 min-h-full bg-base-200 ">
            {/* Sidebar content here */}
            {links}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
