import Lottie from "lottie-react";
import toast from "react-hot-toast";
import contactAnimation from '../../assets/contactAnimation.json'


const Contact = () => {
    // handleContact
    const handleContact =(e)=>{
        e.preventDefault();
        toast.success("Thanks for contacting")
    }
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <div>
            <Lottie animationData={contactAnimation}></Lottie>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleContact}>
          <div>
            <label className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              required
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-600"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full p-3 rounded dark:bg-gray-600"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold  uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
