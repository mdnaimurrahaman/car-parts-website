import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);

  return (
    <div className="my-5">

<div class="card purchase-container lg:card-side bg-base-100">
  <figure><img className="w-96 p-5" src={item.img} alt="Album"/></figure>
  <div class="card-body p-5">
    <h2 class="card-title">{item.name}</h2>
    <p>{item.description}</p>  
      <div className="d-flex justify-content-between">
      <p className="text-3xl"> Price : <span className="font-bold">{item.price}$</span></p>
      <p className="text-xl"><small>Stock : <span className="text-orange-500 font-bold">{item.quantity}p</span></small></p>
      <p  className="text-xl"><small>Minimum Order : <span className="text-orange-500 font-bold"> {item.minOrder}p</span></small></p>
      </div>
      <div class="card-actions justify-end">
      <button class="btn hero-btn">Order Now</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Purchase;
