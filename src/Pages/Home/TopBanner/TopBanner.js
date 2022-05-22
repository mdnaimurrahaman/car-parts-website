import React from "react";
import "./TopBanner.css";
import banner from "../../../Images/Top-Banner.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="w-100 banner-info">
        <div className="">
          <h1 class="text-4xl font-bold">Motion The Best Auto Parts Provider</h1>
          <p class="py-4">
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
