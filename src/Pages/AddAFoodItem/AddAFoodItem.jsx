import useAuthContext from "../../Hooks/useAuthContext";

const AddAFoodItem = () => {
  const { user } = useAuthContext();
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const foodName = form.foodName.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const foodOrigin = form.foodOrigin.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const date = form.date.value;
    const quantity = form.quantity.value;
    console.log(
      userName,
      category,
      price,
      img,
      rating,
      date,
      foodOrigin,
      description,
      quantity,
      foodName
    );
  };
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/8BJBcfX/cool-background-2.png)",
        backgroundSize: "cover", // Adjust the background styles as needed
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[90vh] pt-16"
    >
      <div className="flex justify-center items-center min-h-[100vh] sm:p-0 p-3 py-4">
        <div>
          <h1 className="text-4xl text-center my-4 font-extrabold  bg-clip-text text-secondary">
            Add Your Food
          </h1>

          <form onSubmit={handleSubmit} className="text-black">
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
                    value={user?.email}
                    name="userName"
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
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full"
                  />
                </label>
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
                    // placeholder=" phone, computer etc"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
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
