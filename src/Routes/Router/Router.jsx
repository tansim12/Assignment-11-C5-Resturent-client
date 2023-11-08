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
import MyAddedFood from "../../Pages/MyAddedFood/MyAddedFood";
import AddAFoodItem from "../../Pages/AddAFoodItem/AddAFoodItem";
import MyOrder from "../../Pages/MyOrder/MyOrder";
import PurchaseForm from "../../Pages/PurchaseForm/PurchaseForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            `https://assingment-11-c5-server.vercel.app/api/v1/foodItems/${params._id}`
          );
          const data = res.data;
          return data;
        },
      },
      {
        path: "/allFoodsItems",
        element: <AllFoodsItems></AllFoodsItems>,
      },
      {
        path: "/purchaseForm/:_id",
        element: (
          <PrivateRoute>
            <PurchaseForm></PurchaseForm>
          </PrivateRoute>
        ),
      },

      {
        path: "/myAddedFood",
        element: <MyAddedFood></MyAddedFood>,
      },
      {
        path: "/addAFoodItem",
        element: (
          <PrivateRoute>
            <AddAFoodItem></AddAFoodItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myOrder",
        element: <MyOrder></MyOrder>,
      },
    ],
  },
]);
export default router;
