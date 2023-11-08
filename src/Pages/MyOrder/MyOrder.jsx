import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAuthContext from "../../Hooks/useAuthContext";
import MyOrderCard from "./MyOrderCard";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import NoProducts from "../../Components/NoProducts/NoProducts";
import Lottie from "lottie-react";
import noFound from "../../assets/nodataFound.json";

import axios from "axios";

const MyOrder = () => {
  const { user } = useAuthContext();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myOrder", user],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `https://assingment-11-c5-server.vercel.app/api/v1/allOrders?email=${user?.email}`
        );
        const fetchData = await res.data;
        return fetchData;
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }

  return (
    <div>
      {data?.length === 0 && (
        <div className="mt-20 p-5">
          <NoProducts></NoProducts>
          <div className="flex justify-center items-center my-10">
            <Lottie
              animationData={noFound}
              className="w-full md:w-1/2"
            ></Lottie>
          </div>
        </div>
      )}

      <div>
        {data?.map((item) => (
          <MyOrderCard
            key={item?._id}
            item={item}
            refetch={refetch}
          ></MyOrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
