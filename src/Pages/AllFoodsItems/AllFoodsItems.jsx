import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import AllFoodItemCard from "./AllFoodItemCard";

const AllFoodsItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItem, setPerPageItem] = useState(9);

  const {
    data: { result: food, count },
  } = useQuery({
    queryKey: ["allFoodItems", currentPage, perPageItem],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/foodItems?page=${currentPage}&size=${perPageItem}`
      );
      const fetchData = res.data;
      return fetchData;
    },
    initialData: { food: [], count: 0 },
  });

  const clc = Math.ceil(count / perPageItem);
  const btnArray = [...Array(clc).keys()];
  const btnNumber = btnArray?.map((i) => ++i);


  return (
    <section>
      {/* card section / */}
      <div>
        <AllFoodItemCard food={food}></AllFoodItemCard>
      </div>

      {/* button section  */}
      <div>
        <nav className="inline-flex -space-x-px rounded-md shadow-sm dark:text-gray-100">
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {btnNumber?.map((page) => (
            <button
              onClick={() => {
                setCurrentPage(page);
              }}
              key={page}
              type="button"
              aria-current="page"
              className={`inline-flex items-center px-6 py-2 text-sm font-semibold border   dark:text-gray-900 dark:border-gray-700 ${
                currentPage === page && "bg-secondary"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => {
              if (currentPage < btnNumber.length) {
                setCurrentPage(currentPage + 1);
              }
            }}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
      </div>

      <div></div>
    </section>
  );
};

export default AllFoodsItems;
