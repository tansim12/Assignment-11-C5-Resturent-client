import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../Hooks/useAuthContext";
// import useAxiosHook from "../../Hooks/useAxiosHook";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import noFound from "../../assets/nodataFound.json";
import AllfoodItemCardDiv from "../AllFoodsItems/AllfoodItemCardDiv";
import NoProducts from "../../Components/NoProducts/NoProducts";
import axios from "axios";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const MyAddedFood = () => {
  const { user } = useAuthContext();

  const { data, refetch , isLoading } = useQuery({
    queryKey: ["myAddedFoods", user?.email],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `https://assingment-11-c5-server.vercel.app/api/v1/foodItems?email=${user?.email}`
        );
        const fetchData = await res.data;
        return fetchData;
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <LoadingSkeleton></LoadingSkeleton>
  }

  return (
    <section className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6  ">
      <Helmet>
        <title>My added food</title>
      </Helmet>

      {data?.result?.length === 0 ? (
        <div className="mt-20 p-5">
          <NoProducts></NoProducts>
          <div className="flex justify-center items-center my-10">
            <Lottie
              animationData={noFound}
              className="w-full md:w-1/2"
            ></Lottie>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 ">
          {data?.result?.map((card) => (
            <AllfoodItemCardDiv
              key={card?._id}
              card={card}
              btnValue={"Update"}
              refetch={refetch}
            ></AllfoodItemCardDiv>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyAddedFood;
