import axios from "axios";
import { RiDeleteBin2Line } from "react-icons/ri";

const MyOrderCard = ({ item , refetch }) => {
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
const handleDelete =async(_id)=>{
try {
    const res = await axios.delete("")
} catch (error) {
    console.error(error);
}

}
  return (
    <div className="p-4 grid  sm:grid-cols-12 max-w-screen-xl mx-auto items-center justify-center  shadow-black shadow-2xl gap-5 my-5 ">
      {/* img div  */}
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
        
        onClick={()=>handleDelete(_id)}
        className="btn btn-error text-xl">
          <RiDeleteBin2Line></RiDeleteBin2Line>
        </button>
      </div>
    </div>
  );
};

export default MyOrderCard;
