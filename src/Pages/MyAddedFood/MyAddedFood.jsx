import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosHook from "../../Hooks/useAxiosHook";
import { Helmet } from "react-helmet-async";

import AllfoodItemCardDiv from "../AllFoodsItems/AllfoodItemCardDiv";

const MyAddedFood = () => {
  const { user } = useAuthContext();
  const instance = useAxiosHook();
  const { data } = useQuery({
    queryKey: ["myAddedFoods", user?.email],
    queryFn: async () => {
      try {
        const res = await instance.get(
          `http://localhost:5000/api/v1/userAddNewFoods?email=${user?.email}`
        );
        const fetchData = await res.data;
        return fetchData;
      } catch (error) {
        console.error(error);
      }
    },
  });


  return (
    <section className="max-w-screen-xl mx-auto px-2 sm:px-4 md:mx-6 ">
      <Helmet>
        <title>My added food</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 ">
        {data?.map((card) => (
          <AllfoodItemCardDiv
            key={card?._id}
            card={card}
            btnValue={"Update"}
          ></AllfoodItemCardDiv>
        ))}
      </div>
    </section>
  );
};

export default MyAddedFood;
