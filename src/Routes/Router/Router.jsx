import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../../MainRoot/HomeRoot/HomeRoot";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Blog/Blog";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }

    ]
  },
 
]);
export default router;
