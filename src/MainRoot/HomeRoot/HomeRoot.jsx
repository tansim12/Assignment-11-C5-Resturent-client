import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar.jsx/Navbar";

const HomeRoot = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="mt-20">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeRoot;
