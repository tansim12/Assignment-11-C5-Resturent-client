import Lottie from "lottie-react";
import topSeal from "../../assets/topSeal.json";

import TopSellFoodCard from "./TopSellFoodCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const TopSealFood = () => {
  const { data: foodItems } = useQuery({
    queryKey: ["allFoodItem"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assingment-11-c5-server.vercel.app/api/v1/topSellFood"
      );
      const fetchData = await res.data;
      return fetchData;
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl sm:text-4xl text-center font-black text-black">
          Top selling{" "}
        </h1>

        <Lottie
          animationData={topSeal}
          loop={true}
          autoplay={true}
          className="w-16 sm:w-28"
        ></Lottie>
      </div>
      <div>
        <p className="text-center w-full sm:w-[80%] lg:w-[70%] mx-auto">
          Indulge in Culinary Excellence with Our Top Selling Menu Items!
          Experience a Gastronomic Journey as You Explore the Unrivaled Flavor
          and Popularity of Our Best-Selling Dishes.{" "}
        </p>
      </div>
      {/* top sell food section div  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems?.map((food) => (
          <TopSellFoodCard key={food?._id} food={food}></TopSellFoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <Link
          to={"/allFoodsItems"}
          className="btn btn-md md:btn-lg  btn-neutral"
        >
          Sea All
        </Link>
      </div>
    </div>
  );
};

export default TopSealFood;
