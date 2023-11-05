import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const TopSellFoodCard = ({ food }) => {
  const { food_name, category, image, price, _id } = food;
//   handleDetails
const navigate = useNavigate()
const handleDetails =(_id)=>{
console.log(_id);
navigate(`/foodDetails/${_id}`)
}

  return (
    <div>
      <div className="flex flex-col rounded-2xl hover:cursor-pointer hover:bg-accent p-10 hover:scale-105 hover:transition duration-1000 ease-in-out my-3 shadow-2xl">
        <div>
          <img 
          className="rounded-xl" src={image} alt="Product img" />
        </div>
        <div className=" text-black font-medium my-5 flex-grow">
          <p>
            <span className="text-xl">Name</span> : {food_name}
          </p>
          <p className="my-2">
            <span className="text-xl">Category</span>: {category}
          </p>
          <p className="items-center flex">
            Price : <span className="text-2xl font-bold">$ {price}</span>
          </p>
        </div>

        <div className="flex justify-end flex-grow">
          <button
          
          onClick={()=>handleDetails(_id)}
          className="btn btn-secondary font-extrabold">
            Details{" "}
            <span className="text-xl ">
              <GrLinkNext></GrLinkNext>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSellFoodCard;
