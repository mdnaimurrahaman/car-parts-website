import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { _id, name, description, price, quantity, minOrder, img } = item;
  const navigate = useNavigate();
  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className="card-container">
      <div className="card item-cart bg-base-100 ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <small>{description.slice(0, 150)}</small>
          </p>
          <div>
            <h5>
              {" "}
              Price : <span className="font-bold">{price}$</span>
            </h5>
            <div className="product-info">
              <p>
                <small>
                  Stock :{" "}
                  <span className="text-orange-500 font-bold">{quantity}p</span>
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
          <div className="card-actions buy-btn mt-3">
            <button
              onClick={() => navigateToItemDetail(_id)}
              className="btn hero-btn"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
