import { Helmet } from "react-helmet-async";
import Slider from "../../Components/BannarWithSwiper/Slider";
import TopSealFood from "../../Components/TopSealFood/TopSealFood";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./gsapAnimation.css";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // gsap animation useEffect
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main", // Element that triggers the animation
        // markers:true,
        start: "50% 50%",
        end: "100% 100%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(
      "#center",
      {
        height: "100vh",
      },
      "a"
    )
      .to(
        "#top",
        {
          top: "-50%",
        },
        "a"
      )
      .to(
        "#bottom",
        {
          bottom: "-50%",
        },
        "a"
      )
      .to(
        "#top-h1",
        {
          top: "60%",
        },
        "a"
      )
      .to(
        "#bottom-h1",
        {
          bottom: "-30%",
        },
        "a"
      )
      .to(".content", {
        delay: -0.2,
        marginTop: "0%",
      });
  }, []);
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
      {/* gsap animation   */}
      <div>
      <div id="main">
        <div id="top">
          <h1 id="top-h1">TANSIM</h1>
        </div>
        <div id="center">
          <h2 className="content">hello</h2>
        </div>
        <div id="bottom">
          <h1 id="bottom-h1">TANSIM</h1>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
