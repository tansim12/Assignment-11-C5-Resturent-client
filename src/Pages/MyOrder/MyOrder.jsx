import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthContext from "../../Hooks/useAuthContext";
import MyOrderCard from "./MyOrderCard";
// import { useEffect, useState } from "react";

const MyOrder = () => {
  const { user } = useAuthContext();
  // const [order , setOrder] = useState([])

  // useEffect(as()=>{

  // })
  const { data, isLoading, refetch, isFetched } = useQuery({
    queryKey: ["myOrder", user],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/allOrders?email=${user?.email}`
        );
        const fetchData = await res.data;
        return fetchData;
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {data?.map((item) => (
          <MyOrderCard
            key={item?._id}
            item={item}
            refetch={refetch}
            isFetched={isFetched}
          ></MyOrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
