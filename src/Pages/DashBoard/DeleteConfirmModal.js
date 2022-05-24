import React from "react";

const DeleteConfirmModal = ({ deletingOrder, handleDelete }) => {
  console.log(deletingOrder._id);

  // const handleDelete = id => {
  //     fetch(`https://dry-dawn-20973.herokuapp.com/order/${id}`,{
  //       method: 'DELETE',
  //       headers: {
  //         'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       if(data.deletedCount){
  //         toast.success(`Your Order is deleted`)
  //         setDeletingOrder(null)
  //       }
  //     })
  //   }

  //   const remaining = items.filter((item) => item._id !== id);
  //       setItems(remaining);

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {deletingOrder.item.name} your
            Order?
          </h3>
          <p class="py-4">If you delete your order will be canceled .</p>
          <div class="modal-action">
            <label
              onClick={() => handleDelete(deletingOrder._id)}
              className="btn btn-xs btn-error text-white"
            >
              {" "}
              Delete
            </label>
            <label for="delete-confirm-modal" class="btn btn-xs">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
