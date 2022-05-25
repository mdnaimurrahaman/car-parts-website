import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrder(data));
    }
  }, [navigate, user]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <img width={40} src={o.item.img} alt="" />
                </td>
                <td>{o?.item?.name}</td>
                <td>{o?.item?.price}</td>
                <td>
                  {
                    (o.item.price && !o.item.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className="btn btn-xs btn-success text-white">Pay</button></Link>
                  }
                  {
                    (o.item.price && o.item.paid) && <button className="btn btn-xs btn-success text-white">Paid</button>
                  }
                </td>
                <td>
                  <button className="btn btn-xs btn-error text-white">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;

// method: 'GET',
// headers: {
//     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   },

// fetch(`http://localhost:5000/order?email=${user.email}
