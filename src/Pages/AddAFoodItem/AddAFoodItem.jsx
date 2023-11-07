import { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddAFoodItem = () => {
  const { user } = useAuthContext();
  const [categoryValue, setCategoryValue] = useState("");
  const navigate = useNavigate();
  // handleSubmit
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
      total_purchase: 0,
    };

    //  post by foodItems api
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/foodItems",
        info
      );
      const fetchData = await res.data;

      if (fetchData.acknowledged) {
        // user new add food collection
        axios
          .post("http://localhost:5000/api/v1/userAddNewFoods" , info)
          .then((res) => {
            if (res.data.acknowledged) {
              toast.success("Food Added Successfully");
              navigate("/allFoodsItems");
            }
          });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/8BJBcfX/cool-background-2.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[90vh] pt-16"
    >
      <div className="flex justify-center items-center min-h-[100vh] sm:p-0 p-3 py-4">
        <div>
          <Helmet>
            <title>Add a new food</title>
          </Helmet>
          <h1 className="text-4xl text-center my-4 font-extrabold  bg-clip-text text-secondary">
            Add Your Food
          </h1>

          <form onSubmit={handleSubmit} className="text-black">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">User Name</span>
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
                  <span className="label-text text-white">User Email</span>
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
                  <span className="label-text text-white">Food Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="foodName"
                    required
                    placeholder="Food Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Short description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    required
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Category</span>
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
                  <span className="label-text text-white">Food Origin</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="foodOrigin"
                    placeholder="Food Origin"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    name="quantity"
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Date </span>
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
                  <span className="label-text text-white">Photo Url</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    name="img"
                    required
                    placeholder="url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-secondary w-full my-5 ">
              Add{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddAFoodItem;
