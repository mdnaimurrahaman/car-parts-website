import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [item, setItem] = useState({});

  // const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const url = `https://dry-dawn-20973.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);

  const { register, handleSubmit, watch } = useForm();
  const orderQuantity = watch("order");

  const onSubmit = (data, e) => {
    data.item = item;
    console.log(data);
    const url = `https://dry-dawn-20973.herokuapp.com/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast.success("Your Order Success fully Added");
      });
  };

  return (
    <div className="">
      <div className="card purchase-container lg:card-side bg-base-100">
        <figure>
          <img className="w-96 p-5" src={item.img} alt="Album" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.description}</p>
          <div className="product-detail">
            <p className="text-3xl">
              {" "}
              Price : <span className="font-bold">{item.price}$</span>
            </p>
            <p className="text-xl">
              <small>
                Stock :{" "}
                <span className="text-orange-500 font-bold">
                  {item.quantity}p
                </span>
              </small>
            </p>
            <p className="text-xl">
              <small>
                Minimum Order :{" "}
                <span className="text-orange-500 font-bold">
                  {" "}
                  {item.minOrder}p
                </span>
              </small>
            </p>
          </div>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" order-detail mt-5">
                <div>
                  <input
                    type="text"
                    placeholder="Type here"
                    value={user.displayName}
                    readOnly
                    {...register("name", { required: true })}
                    className="input"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Type here"
                    value={user.email}
                    readOnly
                    {...register("email", { required: true })}
                    className="input"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Phone"
                    {...register("phone", { required: true })}
                    className="input"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Address"
                    {...register("address", { required: true })}
                    className="input"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Order Quantity"
                    {...register("order", { required: true })}
                    className="input"
                  />
                </div>
                <div className="">
                  <button
                    disabled={
                      orderQuantity < item.minOrder ||
                      orderQuantity > item.quantity
                    }
                    type="submit"
                    className="btn hero-btn"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

//disabled={item?.minOrder < e.target.order.value}
//disabled={item?.minOrder < onchange.target.order.value && item?.quantity < onchange.target.order.value}
