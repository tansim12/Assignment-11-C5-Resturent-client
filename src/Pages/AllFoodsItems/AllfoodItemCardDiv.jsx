import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import UpdateButton from "../MyAddedFood/UpdateButton";

const AllfoodItemCardDiv = ({ card, btnValue ,refetch }) => {
  return (
    <div key={card?._id} className="w-full">
      <div className="rounded-lg p-5  shadow-black shadow-2xl ">
        <img alt="Home" src={card?.image} className=" w-full rounded-md r" />

        <div className="mt-2">
          <div className="">
            <dt className="sr-only">Price</dt>

            <dd className="text-lg mt-2 text-secondary">${card?.price}</dd>
          </div>

          <div>
            <dd className="font-medium">{card?.food_name}</dd>
          </div>

          <div className="mt-6 flex items-center justify-around sm:justify-between text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Stokes</p>

                <p className="font-medium text-secondary">
                  {card?.quantity > 0 ? card?.quantity : "no available"} pis
                </p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Category</p>

                <p className="font-medium text-secondary">{card?.category}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              {/* conditional render button , update and details btnValue  */}
              {btnValue === "Details" ? (
                <Link
                  to={`/foodDetails/${card?._id}`}
                  className="btn btn-secondary font-extrabold"
                >
                  {btnValue}
                  <span className="text-xl ">
                    <GrLinkNext></GrLinkNext>
                  </span>
                </Link>
              ) : (
                <UpdateButton card={card} btnValue={btnValue} refetch={refetch}></UpdateButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllfoodItemCardDiv;
