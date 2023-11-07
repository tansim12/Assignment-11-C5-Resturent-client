import { GrLinkNext } from "react-icons/gr";
import UpdateFoodDetailsForm from "./UpdateFoodDetailsForm";

const UpdateButton = ({card, btnValue }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-secondary font-extrabold "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {btnValue}
        <span className="text-xl ">
          <GrLinkNext></GrLinkNext>
        </span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
              ✕
            </button>
          </form>
          <div>
            <UpdateFoodDetailsForm card={card}></UpdateFoodDetailsForm>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateButton;
