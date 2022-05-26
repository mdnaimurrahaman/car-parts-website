import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1Y6tHlCN7WZFtE5I0xBUKRJsI9tSoPd5BMiZDc0kv5OLz5o22kFXc645yOa9MQapmwAF2F9MyPR5UPK1oRuBSW00IyyFt3Em"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/order/${id}`;
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

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-orange-500 font-bold">Hello. {order.name}</p>
          <h2 class="card-title">Pay for {order.item.name}</h2>
          <p>Order products : {order.order}p</p>
          <p>Please Pay : ${order.item.price}</p>
        </div>
      </div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body"></div>
        <div className="p-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
