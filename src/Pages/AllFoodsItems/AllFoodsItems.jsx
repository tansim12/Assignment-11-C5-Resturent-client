import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import AllFoodItemCard from "./AllFoodItemCard";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AllFoodsItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItem, setPerPageItem] = useState(9);
  const [newCategory, setNewCategory] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const {
    data: { result: food, count },
  } = useQuery({
    queryKey: [
      "allFoodItems",
      currentPage,
      perPageItem,
      newCategory,
      newSearch,
    ],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/foodItems?page=${currentPage}&size=${perPageItem}&category=${newCategory}&search=${newSearch}`
      );
      const fetchData = res.data;
      return fetchData;
    },
    initialData: { food: [], count: 0 },
  });

  const clc = Math.ceil(count / perPageItem);
  const btnArray = [...Array(clc).keys()];
  const btnNumber = btnArray?.map((i) => ++i);

  // handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setNewSearch(search);
    setCurrentPage(1)
  };
  return (
    <section className="">
      <Helmet><title>All food items</title></Helmet>
      {/* hero section  */}
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/3TXhp7w/photo-1543353071-10c8ba85a904-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-norma.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 bg-black"></div>
          <div className="hero-content text-center text-neutral-content w-full justify-center">
            <div className="w-full flex items-center justify-end">
              <form
                onSubmit={handleSearch}
                className="w-full flex items-center justify-center "
              >
                <div className="dropdown dropdown-hover">
                  <label tabIndex={1} className="btn m-1 text-xl">
                    <FaFilter></FaFilter>
                  </label>
                  <select
                    onChange={(e) => {
                      setNewCategory(e.target.value);

                      console.log(e.target.value);
                    }}
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box text-black w-52"
                  >
                    <option disabled selected>
                      Select your category name
                    </option>
                    <option className="font-bold cursor-pointer" value="Beef">
                      Beef
                    </option>
                    <option
                      className="font-bold my-3 cursor-pointer"
                      value="Seafood"
                    >
                      Seafood
                    </option>
                    <option
                      className="font-bold cursor-pointer"
                      value="Chicken"
                    >
                      Chicken
                    </option>
                  </select>
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Type here"
                  className="input input-bordered input-info w-[70%] text-black "
                />
                <button type="submit" className="text-2xl btn-secondary btn">
                  <FaSearch></FaSearch>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* hero end  */}

      {/* card section / */}
      <div className="max-w-screen-xl mx-auto md:px-12 lg:px-10 my-10">
        <AllFoodItemCard food={food}></AllFoodItemCard>
      </div>

      {/* button section  */}
      <div className="flex justify-center items-center my-10">
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
              className={`inline-flex items-center px-4 md:px-7 py-2 text-sm font-semibold border   dark:text-gray-900 dark:border-gray-700 ${
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
