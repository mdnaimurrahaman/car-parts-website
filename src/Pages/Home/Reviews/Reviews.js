import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./Review.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://dry-dawn-20973.herokuapp.com/review", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <h2 className='catagories-title'>Customer Review</h2>
            <p className='text-center uppercase '>Valuable feedback from our customers</p>
            <div className='hr-line line-1'>
                <hr/>
            </div>
        <div className="reviews-container mt-12">
          {reviews.slice(0, 8).map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
    
    </section>
  );
};

export default Reviews;
