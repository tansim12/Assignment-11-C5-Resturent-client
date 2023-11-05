import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const data = useLoaderData();
  const {
    food_name,
    category,
    image,
    price,
    rating,
    author,
    food_origin,
    description,
    total_purchase,
    stored_date,
  } = data;
  return (
    <div>

        
    </div>
  );
};

export default FoodDetails;
