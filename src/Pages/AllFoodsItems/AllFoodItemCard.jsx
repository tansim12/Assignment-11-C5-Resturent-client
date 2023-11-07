
import AllfoodItemCardDiv from "./AllfoodItemCardDiv";

const AllFoodItemCard = ({ food }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {food?.map((card) => (
       <AllfoodItemCardDiv key={card?._id} card={card} btnValue={"Details"}></AllfoodItemCardDiv>
      ))}
    </div>
  );
};

export default AllFoodItemCard;
