import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../../MainRoot/HomeRoot/HomeRoot";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Blog/Blog";
import Register from "../../Pages/Register/Register";
import AllFoodsItems from "../../Pages/AllFoodsItems/AllFoodsItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/foodDetails/:_id",
        element: <FoodDetails></FoodDetails>,
        loader: async ({ params }) => {
          const res = await axios.get(
            `http://localhost:5000/api/v1/foodItems/${params._id}`
          );
          const data = res.data;
          return data;
        },
      },
      {
        path: "/allFoodsItems",
        element: <AllFoodsItems></AllFoodsItems>,
      },
    ],
  },
]);
export default router;
