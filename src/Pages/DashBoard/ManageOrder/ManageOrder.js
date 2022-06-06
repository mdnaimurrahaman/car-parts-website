import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  // console.log(allOrder.length)
  

  useEffect(() => {
    fetch(`https://dry-dawn-20973.herokuapp.com/allOrder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);

  // const shipping = true;

  // const handleShipping = (id) =>{
  //   fetch(`https://dry-dawn-20973.herokuapp.com/order/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //       body: JSON.stringify({shipping}),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  // }

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map((o, index) => (
              <tr key={o._id}>
                <th>{index + 1}</th>
                <td>
                  <img width={40} src={o.item.img} alt="" />
                </td>
                <td>{o?.item?.name}</td>
                <td>{o?.item?.price}</td>
                <td>
                  {o?.item?.price && !o.paid && (
                    <button className="btn btn-xs btn-error text-white">
                      UNPAID
                    </button>
                  )}
                  {o?.item?.price && o.paid && (
                    <button className="btn-xs text-green-500 font-bold">
                      PAY DONE
                    </button>
                  )}
                </td>
                <td>
                  {o?.item?.price && o.paid && (
                    <label
                    //  onClick={()=>handleShipping(o._id)}
                      for="delete-confirm-modal"
                      className="btn btn-xs btn-success modal-button text-white"
                    >
                      {" "}
                      Shipping
                    </label>
                  )}
                  {o && o?.Shift && (
                    <button className="btn-xs text-green-500 font-bold">
                      Shift
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
