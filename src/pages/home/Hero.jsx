import React, { useEffect } from "react";
import styles from "../../style"; // Assuming you have styles defined here.
import { valoranttext } from "../../assets/index"; // Assuming this is your asset.
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // Move useNavigate inside the Hero component
  const navigate = useNavigate();

  // Define visitShop function within the component
  const visitShop = () => {
    navigate('/shop');
  };

  // You can use useEffect if you want to run some side effects on component mount
  useEffect(() => {
    // You can add any logic that needs to run on mount here
    // Currently, it's empty because we don't have any specific logic.
  }, []); // Empty array means this runs once on mount

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden min-h-[490px]"
    >
      <div
        className={`relative flex items-center justify-center flex-col px-[5%] py-[4rem] w-full h-full`}
      >
        <div className="sm:py-10 py-0 flex items-center justify-between sm:flex-col mb-auto">
          {/* Optional content could be uncommented if needed */}
          {/* <h6 className="text-white font-semibold mt-4 text-center sm:mb-10">
            A 5v5 character-based tactical shooter
          </h6> */}
          <div>
            {/* Uncomment this if wanted */}
            {/* <img
              src={valoranttext}
              alt="valorant"
              className="sm:h-[100px] h-[50px]"
            /> */}
          </div>
        </div>
        {/* <button className="btn" onClick={visitShop}>
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">SHOP NOW</span>
          </span>
        </button> */}
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-[0] w-auto min-w-full min-h-full max-w-none"
      >
        {/* Uncomment if needed, provide a video source */}
        <source
          src="https://github.com/sandesh362/valorant--website-/raw/refs/heads/main/src/assets/DUELISTS%20__%20Official%20Launch%20Cinematic%20Trailer%20-%20VALORANT.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
