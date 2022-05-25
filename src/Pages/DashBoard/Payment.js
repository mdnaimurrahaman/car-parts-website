import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
import "../DashBoard/MyProfile/MyProfile.css";

const stripePromise = loadStripe(
  "pk_test_51L1Y6tHlCN7WZFtE5I0xBUKRJsI9tSoPd5BMiZDc0kv5OLz5o22kFXc645yOa9MQapmwAF2F9MyPR5UPK1oRuBSW00IyyFt3Em"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://dry-dawn-20973.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
  
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(order)
  const total = order?.item?.price * order?.order;
  // const totalPrice = parseInt(total)
  // console.log(isNaN(totalPrice))

  return (
    <div className="payment-container">
      <div class="card card-box w-50 mx-auto max-w-md bg-base-100  my-12">
        <div class="p-10">
          <h3 className="text-green-500 font-bold">
            Hello..!{" "}
            <span className="text-gray-600 font-semibold my-6">
              {order.name}
            </span>
          </h3>
          <h1 class="card-title">Pay for {order?.item?.name}</h1>
          <p>
            Order products :{" "}
            <span className="text-gray-800 font-bold">{order.order}p</span>{" "}
          </p>
          <p>
            per products price :{" "}
            <span className="text-gray-800 font-bold">${order.item.price}</span>
          </p>
          <div className="flex items-center">
            <p>
              Total Pay :
              <span className="text-green-500 text-xl font-semibold">
                {" "}
                ${total}
              </span>{" "}
            </p>
            <div class="avatar ml-28">
              <div class="w-24 mask mask-hexagon">
                <img
                  src={order?.item?.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-box w-50 mx-auto max-w-md bg-base-100 my-12">
        <div class="">
          <h2 className="text-center text-gray-600 my-6">Checkout</h2>
          <div className="p-10">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} total={total} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
