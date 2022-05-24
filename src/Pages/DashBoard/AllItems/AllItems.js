import React from "react";
import "./AllITems.css";

const AllItems = ({ item, handleDelete }) => {
  const { _id, name, price, img, quantity, minOrder } = item;

  return (
    <div className="">
      <div className="card-container">
        <div class="card item-cart bg-base-100 ">
          <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            {/* <p><small>{description.slice(0,150)}</small></p> */}
            <div>
              <h5>
                {" "}
                Price : <span className="font-bold">{price}$</span>
              </h5>
              <div className="product-info">
                <p>
                  <small>
                    Stock :{" "}
                    <span className="text-orange-500 font-bold">
                      {quantity}p
                    </span>
                  </small>
                </p>
                <p>
                  <small>
                    Minimum Order :{" "}
                    <span className="text-orange-500 font-bold">
                      {" "}
                      {minOrder}p
                    </span>
                  </small>
                </p>
              </div>
            </div>
            <div class="card-actions buy-btn mt-3">
              <button
                className="btn hero-btn"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
