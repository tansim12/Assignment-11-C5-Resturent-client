import { Helmet } from "react-helmet-async";
import Slider from "../../Components/BannarWithSwiper/Slider";
import TopSealFood from "../../Components/TopSealFood/TopSealFood";
import Contact from "../../Contact/Contact";
import Counter from "../../Components/Counter/Counter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner div slider  with swiper.js */}
      <div>
        <Slider></Slider>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 lg:px-10 my-10">
        <TopSealFood></TopSealFood>
      </div>

      {/* counter section  */}
      <div className="my-20">
        <Counter></Counter>
      </div>
      {/* contact section  */}
      <div className="my-10">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
