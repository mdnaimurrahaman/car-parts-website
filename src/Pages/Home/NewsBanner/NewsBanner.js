import React from "react";
import Typewriter from "typewriter-effect";
import banner from "../../../Images/Banner2.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import "./NewsBanner.css";

const NewsBanner = () => {
  return (
    <section className="top-banner">
      <div className=" banner-info">
        <div className="">
          <h1 className="text-4xl font-bold"><Typewriter
                options={{
                  strings: ["Subscribe Our News..!"],
                  autoStart: true,
                  loop: true,
                }}
              /></h1>
          <p className="py-2">Good Deals and Quality Parts Every Day.</p>
          <div>
            <div className="d-flex">
              <input
                className=""
                type="text"
                placeholder="Your Mail Address"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="mt-2">
              <PrimaryButton>Subscribed</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src={banner} alt="" srcset="" />
      </div>
    </section>
  );
};

export default NewsBanner;
