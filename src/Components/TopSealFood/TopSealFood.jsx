import Lottie from "lottie-react";
import topSeal from "../../assets/topSeal.json";

// import { useEffect, useState } from "react";
import TopSellFoodCard from "./TopSellFoodCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const TopSealFood = () => {
  //   const [foodItems, setFoodItems] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/v1/topSellFood")
  //       .then((res) => setFoodItems(res.data));
  //   }, []);

  const { data: foodItems } = useQuery({
    queryKey: ["allFoodItem"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/api/v1/topSellFood");
      const fetchData = await res.data;
      return fetchData;
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-center font-bold text-black">
          Top selling{" "}
        </h1>
        <Lottie
          animationData={topSeal}
          loop={true}
          autoplay={true}
          className="w-28"
        ></Lottie>
      </div>
      {/* top sell food section div  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems?.map((food) => (
          <TopSellFoodCard key={food?._id} food={food}></TopSellFoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <Link
        to={"/items"}
        className="btn btn-md md:btn-lg  btn-neutral">Sea All</Link>
      </div>
    </div>
  );
};

export default TopSealFood;
