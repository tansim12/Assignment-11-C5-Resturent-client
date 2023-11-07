import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar.jsx/Navbar";
import Footer from "../../Components/Footer/Footer";

const HomeRoot = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="mt-20">
      <Outlet></Outlet>
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeRoot;
