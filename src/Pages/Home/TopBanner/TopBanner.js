import React from "react";
import "./TopBanner.css";
import Typewriter from "typewriter-effect";
import banner from "../../../Images/Top-Banner.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="w-100 banner-info">
        <div className="">
          <h1 className="text-4xl font-bold">
            
            <Typewriter
                options={{
                  strings: ["Motion The Best Auto Parts Provider."],
                  autoStart: true,
                  loop: true,
                }}
              />
          </h1>
          <p className="py-4">
            Your Trusted Source for Automotive Parts And Accessories
          </p>
          <PrimaryButton>All Catalog</PrimaryButton>
        </div>
      </div>
      <div className="">
        <img src={banner} alt="" srcset="" />
      </div>
    </div>
  );
};

export default TopBanner;
