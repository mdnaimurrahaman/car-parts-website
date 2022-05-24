import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import DeleteConfirmModal from "../DashBoard/DeleteConfirmModal";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    console.log(email);
    if (user) {
      fetch(`https://dry-dawn-20973.herokuapp.com/order?email=${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

  const handleDelete = (id) => {
    fetch(`https://dry-dawn-20973.herokuapp.com/order/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = order.filter((item) => item._id !== id);
        toast.success("Delete Success fully");
        setDeletingOrder(null);
        setOrder(remaining);
      });
  };

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
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, index) => (
              <tr key={o._id}>
                <th>{index + 1}</th>
                <td>
                  <img width={40} src={o.item.img} alt="" />
                </td>
                <td>{o?.item?.name}</td>
                <td>{o?.item?.price}</td>
                <td>
                  {o.item.price && !o.paid && (
                    <Link to={`/dashboard/payment/${o._id}`}>
                      <button className="btn btn-xs btn-success text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {o.item.price && o.paid && (
                    <button className="btn-xs text-green-500 font-bold">
                      PAID
                    </button>
                  )}
                </td>
                <td>
                  {o.item.price && !o.paid && (
                    <label
                      onClick={() => setDeletingOrder(o)}
                      for="delete-confirm-modal"
                      className="btn btn-xs btn-error modal-button text-white"
                    >
                      {" "}
                      Cancel
                    </label>
                  )}
                  {/* for="delete-confirm-modal" class="btn modal-button" */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteConfirmModal
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
          handleDelete={handleDelete}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default MyOrder;

// method: 'GET',
// headers: {
//     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   },

// fetch(`https://dry-dawn-20973.herokuapp.com/order?email=${user.email}
