import { useNavigate, useParams } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import purchase from "../../assets/purchase.json";
import Lottie from "lottie-react";

import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "../../Hooks/useAxiosHook";

const PurchaseForm = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const instance = useAxiosHook();
  const { _id } = useParams();
  const { data } = useQuery({
    queryKey: ["purchaseFood", _id],
    queryFn: async () => {
      try {
        const res = await instance.get(`/foodItemsFindPurchaseForm/${_id}`);
        const fetchData = await res.data;
        return fetchData;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const [currentPrice, setCurrentPrice] = useState(data?.price);
  const [newQuantity, setNewQuantity] = useState(data?.quantity);

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
    const newTotalPurchase = {
      total_purchase: data?.total_purchase + newQuantity,
    };

    if (data?.quantity < 1) {
      return toast.error("This food is not available");
    }
    if (quantity < 1) {
      return toast.error("Quantity not less then 1");
    }
    if (quantity > data?.quantity) {
      return toast.error(`You Can't buy more then ${data?.quantity}`);
    }
    if (currentPrice === 0) {
      return toast.error("Stoke out");
    }
    // console.log(userName, price, date, quantity, foodName, email );
    // update database this info
    const foodId = data?._id;
    const foodImage = data?.image;
    const description = data?.description;
    const storedDate = data?.stored_date;
    console.log(foodImage);
    const info = {
      userName,
      price,
      date,
      quantity,
      foodName,
      email,
      foodId,
      foodImage,
      description,
      storedDate,
    };
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Are you sere purchase this products!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Purchase it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.post(
            "https://assingment-11-c5-server.vercel.app/api/v1/allOrders",
            info
          );
          const fetchData = await res.data;
          if (fetchData.insertedId) {
            // patch product total_purchase  count
            axios
              .patch(
                `https://assingment-11-c5-server.vercel.app/api/v1/foodItems/${data?._id}`,
                newTotalPurchase
              )
              .then((res) => {
                if (res.data.acknowledged) {
                  navigate("/myOrder");
                  Swal.fire({
                    title: "Successful",
                    text: "Your purchase successfully done.",
                    icon: "success",
                  });
                }
              });
          }
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="min-h-[90vh] pt-16">
      <Helmet>
        <title>Purchase food</title>
      </Helmet>
      <div>
        <div className="mb-20">
          <h1 className="text-4xl text-center mb-4 font-extrabold  bg-clip-text text-secondary">
            Purchase Your Food
          </h1>
          <p className="w-full sm:w-2/4 mx-auto mb-4 text-center">
            Enjoy a Delicious Culinary Experience with Our Exquisite Food
            Selection – Savor Mouthwatering Delights, From Savory Dishes to
            Irresistible Desserts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5  ">
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
            className="text-black col-span-3 w-[90%] mx-auto shadow-2xl shadow-black p-4 rounded-lg"
          >
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="form-control">
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
                  <span className="label-text">Food Name</span>
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
                  <span className="label-text ">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    name="price"
                    value={
                      currentPrice || data?.price * data?.quantity.toFixed(2)
                    }
                    readOnly
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
                    onChange={(e) => {
                      const val = parseInt(e.target.value);

                      if (val > 0) {
                        console.log(currentPrice);
                        setCurrentPrice(data?.price * val);
                      } else {
                        setCurrentPrice(0);
                      }
                      setNewQuantity(val);
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

            <button
              type="submit"
              className="btn btn-secondary text-white font-bold w-full my-5"
            >
              Purchase{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PurchaseForm;
