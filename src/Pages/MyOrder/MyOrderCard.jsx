import axios from "axios";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyOrderCard = ({ item, refetch }) => {
  const {
    description,
    foodName,
    _id,
    date,
    storedDate,
    price,
    quantity,
    userName,
    foodImage,
  } = item;

  //   handleDelete
  const handleDelete = (_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `http://localhost:5000/api/v1/allOrders/${_id}`
          );
          const fetchData = await res.data;
          if (fetchData.acknowledged) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-4 grid  sm:grid-cols-12 max-w-screen-xl mx-auto items-center justify-center  shadow-black shadow-2xl gap-5 my-5 ">
      {/* img div  */}
      <Helmet>
        <title>My order</title>
      </Helmet>
      <div className=" col-span-5 text-black">
        <div className=" flex justify-center items-center sm:block">
          <img
            className=" w-[200px] rounded-full bg-gray-200 p-5"
            src={foodImage}
            alt={userName}
          />
        </div>
        <div className=" my-3 text-black">
          <p>
            {" "}
            <span className="text-lg font-bold"> $</span>{" "}
            <span className="font-medium text-neutral">{price}</span>
          </p>
          <p>
            {" "}
            <span className="text-lg font-bold">Quantity :</span>{" "}
            <span className="font-medium text-neutral">{quantity} pis</span>
          </p>
          <p>
            {" "}
            <span className="text-lg font-bold">Name :</span>{" "}
            <span className="font-medium text-neutral">{foodName}</span>
          </p>
        </div>
      </div>

      {/* Purchase info  */}
      <div className="text-black col-span-5">
        <p>
          {" "}
          <span className="text-lg font-bold">Purchase Date :</span>{" "}
          <span className="font-medium text-neutral">{date}</span>
        </p>
        <p>
          {" "}
          <span className="text-lg font-bold">Stored Date :</span>{" "}
          <span className="font-medium text-neutral">{storedDate}</span>
        </p>
        <p>
          {" "}
          <span className="text-lg font-bold"> Author :</span>{" "}
          <span className="font-medium text-neutral">{userName}</span>
        </p>
        <p>
          {" "}
          <span className="text-lg font-bold"> Details :</span> {description}
        </p>
      </div>
      <div className="flex items-center justify-center col-span-5 sm:col-span-2 w-[100wh] sm:w-full">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error text-xl"
        >
          <RiDeleteBin2Line></RiDeleteBin2Line>
        </button>
      </div>
    </div>
  );
};

export default MyOrderCard;
