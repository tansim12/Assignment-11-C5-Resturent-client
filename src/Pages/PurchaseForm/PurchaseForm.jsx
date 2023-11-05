import { useLoaderData } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import purchase from "../../assets/purchase.json";
import Lottie from "lottie-react";

import toast from "react-hot-toast";
import { useState } from "react";

const PurchaseForm = () => {
  const { user } = useAuthContext();
  const data = useLoaderData();
  const [currentPrice, setCurrentPrice] = useState(data?.price);
  let oldTotalPurchase = user?.total_purchase;

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const date = form.date.value;
    const quantity = form.quantity.value;
    if (quantity < 1) {
      return toast.error("Quantity not less then 1");
    }
    if (quantity > data?.quantity) {
      return toast.error(`You Can't buy more then ${data?.quantity}`);
    }
    console.log(userName, price, date, quantity, foodName, email);
  };

  return (
    <section className="min-h-[90vh] pt-16">
      <div>
        <h1 className="text-4xl text-center my-4 font-extrabold  bg-clip-text text-secondary">
          Purchase Your Food
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 ">
          <div className="col-span-2">
            <Lottie
              className=""
              animationData={purchase}
              loop={true}
              autoPlay={true}
            ></Lottie>
          </div>
          <form
            onSubmit={handleSubmit}
            className="text-black col-span-3 w-[90%] mx-auto"
          >
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="form-control">
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
                <label className="input-group text-black">
                  <input
                    type="text"
                    name="foodName"
                    required
                    readOnly
                    value={data?.food_name}
                    className="input input-bordered w-full "
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
                    value={currentPrice.toFixed(2)}
                    
                    readOnly
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
                  onChange={(e)=>{
                    setCurrentPrice(currentPrice * e.target.value)
                  }}
                    type="number"
                    required
                    name="quantity"
                    defaultValue={data?.quantity}
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Buying Date </span>
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
            </div>

            <button type="submit" className="btn btn-secondary text-white font-bold w-full my-5">
              Purchase{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PurchaseForm;
