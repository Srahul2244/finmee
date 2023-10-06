import middle_img from "../assets/mtm.jpeg";
import middle_img1 from "../assets/sust.jpeg";
import middle_img2 from "../assets/mp.jpeg";
import middle_img3 from "../assets/og.png";
import { useEffect, useState } from "react";
import "../style/hero.css";
const Hero = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`md:flex mt-8 ${
          scrollOffset > 100 ? "slide-in-up active" : "slide-in-up"
        }`}
      >
        <div className="px-[20px]">
          <h1 className="text-[43px] font-bold text-[#FF3A2D] w-[600px] mt-[-20px] ">
            Mine-To-Mill-To-Mine Optimization
          </h1>

          <p className="text-[#3e3e3e] text-[16px] w-[550px] leading-6 font-medium mt-3">
            NTWIST’s newest product unlocks up to $250/oz in previously
            inaccessible value in open pit gold mines by connecting siloed data
            sources like block models, fleet management systems, stockpile
            surveys, and plant instruments. This allows your company to better
            track material flow, and feed properties, identify plan/production
            discrepancies, and correct resource models and production plans.
          </p>

          <button className=" flex items-center justify-center p-[10px] bg-[#FF3A2D] text-[white] font-bold rounded-[4px] mt-[36px] w-[130px]">
            Read more
          </button>
        </div>
        <div className="p-[20px]">
          <img className="w-[92%] h-[430px]" src={middle_img} alt="hero-img" />
        </div>
      </div>

      {/* second section  */}

      <div
        className={`md:flex mt-14 ${
          scrollOffset > 300 ? "slide-in-up active" : "slide-in-up"
        }`}
      >
        <div className="px-[20px]">
          <img className="w-full h-[370px]" src={middle_img1} alt="hero-img" />
        </div>
        <div className="p-[20px]">
          <h1 className="text-[43px] font-medium text-[#FF3A2D] w-[600px] mt-[-35px]">
            Sustainability
          </h1>

          <p className="text-[#3e3e3e] text-[16px] w-[550px] leading-7 font-medium mt-3">
            Environmental stewardship is a priority for NTWIST. We help our
            customers to minimize their sustainability impact on the planet.
            Emissions or environmental targets are used alongside productivity
            targets to define success for our customers.
          </p>
          <p className="text-[#404040] text-[16px] w-[550px] leading-7 font-medium mt-3">
            With the increasing relevance of carbon accounting and emissions
            tracking, NTWIST offers a suite of tools to increase visibility into
            environmental performance and help processing plants track, manage,
            optimize, and report key metrics.
          </p>

          <button className=" flex items-center justify-center p-[10px] bg-[#FF3A2D] text-[white] font-bold rounded-[4px] mt-[36px] w-[130px]">
            Read more
          </button>
        </div>
      </div>
      {/* third section */}
      <div
        className={`md:flex mt-8 ${
          scrollOffset > 500 ? "slide-in-up active" : "slide-in-up"
        }`}
      >
        <div className="p-[20px]">
          <h1 className="text-[43px] font-medium text-[#FF3A2D] w-[600px] mt-[100px]">
            Mineral Processing
          </h1>

          <p className="text-[#3e3e3e] text-[16px] w-[550px] leading-6 font-medium mt-3">
            NTWIST offers a number of solutions for mills, concentrators, and
            leach plants. Our solutions help operations to reduce the effect of
            feed variability, avoid downtime and increase peak throughput while
            decreasing energy and reagent consumption.
          </p>

          <button className=" flex items-center justify-center p-[10px] bg-[#FF3A2D] text-[white] font-bold rounded-[4px] mt-[36px] w-[130px]">
            Read more
          </button>
        </div>
        <div className="p-[20px">
          <img className="w-[92%] h-[420px]" src={middle_img2} alt="hero-img" />
        </div>
      </div>

      {/* fourth section */}
      <div
        className={`md:flex mt-8 ${
          scrollOffset > 700 ? "slide-in-up active" : "slide-in-up"
        }`}
      >
        <div className="px-[20px]">
          <img className="w-[92%] h-[420px]" src={middle_img3} alt="hero-img" />
        </div>
        <div className="p-[20px]">
          <h1 className="text-[43px] font-medium text-[#FF3A2D] w-[600px] mt-[70px]">
            Oil & Gas
          </h1>

          <p className="text-[#3e3e3e] text-[16px] w-[550px] leading-6 font-medium mt-3">
            Oil and Gas plants require a high level of control and robustness in
            their operation due to the high risks to people and environment.
          </p>
          <p className="text-[#404040] text-[16px] w-[550px] leading-7 font-medium mt-3">
            NTWIST helps Oil & Gas customers to analyze historical data,
            identify opportunities for process control improvements, and reduce
            variability in any part of the process, thus providing enhanced
            reliability and safety.
          </p>

          <button className=" flex items-center justify-center p-[10px] bg-[#FF3A2D] text-[white] font-bold rounded-[4px] mt-[36px] w-[130px]">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
