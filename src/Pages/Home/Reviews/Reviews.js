import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Review.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

    return (
        <div>
            <div className='my-5'>
                <div className='reviews-container'>
                    {
                        reviews.slice(0,8).map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;