import React from "react";
import icon from "../../../Images/307-3078264_star-rating-icon-rating-star-single-png.png";
import "./Review.css";

const Review = ({ review }) => {
  const { name, rating, description } = review;
  return (
    <div class="card bg-base-100 review-cart">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description.slice(0,100)}<small className="ms-2 text-gray-400">SeeMore...</small></p>
        <div class="card-actions justify-between items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="rating-info">
              <div><span>Review : </span><span className="text-xl">{rating}</span></div>
              <img src={icon} alt="" srcset="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
