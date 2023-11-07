import { useState } from "react";
import toast from "react-hot-toast";
import useAuthContext from "../../Hooks/useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateFoodDetailsForm = ({ card }) => {
  const navigate = useNavigate();
  const {
    food_name,
    food_origin,
    price,
    quantity,
    rating,
    description,
    image,
  } = card;
  const { user } = useAuthContext();
  const [categoryValue, setCategoryValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const foodName = form.foodName.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const foodOrigin = form.foodOrigin.value;
    const img = form.img.value;
    const rating = parseInt(form.rating.value);
    const date = form.date.value;
    const quantity = parseInt(form.quantity.value);
    if (!categoryValue) {
      return toast.error("Select your Category");
    }
    if (price <= 0) {
      return toast.error("Price should be more then 0");
    }
    if (rating > 5 || rating < 0) {
      return toast.error("Rating should be inside 1 to 5");
    }
    if (quantity <= 0) {
      return toast.error("Quantity should not less then 1");
    }
    if (!date) {
      return toast.error("Select your data");
    }
    const info = {
      category: categoryValue,
      price,
      image: img,
      rating,
      stored_date: date,
      food_origin: foodOrigin,
      description,
      quantity,
      food_name: foodName,
      email,
      _id: card?._id,
    };
    const toastId = toast.loading("Update successfully done");

    // update 2 side  first foodItems collection and userAddNewFoods collection
    try {
      // first foodItems collection
      const res = await axios.put(
        "https://assingment-11-c5-server.vercel.app/api/v1/foodItems",
        info
      );
      const fetchData = await res.data;
      if (fetchData.modifiedCount > 0) {
        toast.success("Update successfully done", { id: toastId });
        navigate("/allFoodsItems");
      }
    } catch (error) {
      toast.error(error, { id: toastId });
    }
    try {
      // second userAddNewFoods collection

      const res = await axios.put(
        "https://assingment-11-c5-server.vercel.app/api/v1/userAddNewFoods",
        info
      );
      const fetchData = await res.data;
      if (fetchData.modifiedCount > 0) {
        toast.success("Update successfully done", { id: toastId });
        navigate("/allFoodsItems");
      }
    } catch (error) {
      toast.error(error, { id: toastId });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-black">
        <div className=" grid grid-cols-1  gap-4 ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                readOnly
                value={user?.displayName}
                name="userName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                required
                readOnly
                value={user?.email}
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodName"
                required
                defaultValue={food_name}
                placeholder="Food Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                required
                defaultValue={description}
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Category</span>
            </label>
            <select
              onChange={(e) => {
                setCategoryValue(e.target.value);
              }}
              className="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Select Category
              </option>
              <option value="Beef">Beef</option>
              <option value="Chicken">Chicken</option>
              <option value="Seafood">Seafood</option>
            </select>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Food Origin</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                defaultValue={food_origin}
                name="foodOrigin"
                placeholder="Food Origin"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                required
                defaultValue={price}
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                required
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                required
                defaultValue={rating}
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Date </span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="date"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control sm:col-span-2 ">
            <label className="label">
              <span className="label-text ">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="img"
                defaultValue={image}
                required
                placeholder="url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-secondary w-full my-5 ">
          Update
        </button>
      </form>
      
    </div>
  );
};

export default UpdateFoodDetailsForm;
