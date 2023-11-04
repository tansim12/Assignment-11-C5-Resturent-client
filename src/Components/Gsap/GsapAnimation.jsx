import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./gsapAnimation.css";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = () => {
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
    <section>
      <div className="h-screen bg-red-300"></div>
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
      <div className="h-screen bg-green-300"></div>
    </section>
  );
};

export default GsapAnimation;
