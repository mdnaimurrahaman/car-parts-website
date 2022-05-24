import React from 'react';
import { Link } from "react-router-dom";
import AllItems from '../AllItems/AllItems';
import useItems from '../../Hooks/useItems';
import './ManageAllProduct.css'


const ManageAllProduct = () => {

    const [items, setItems] = useItems();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

    return (
        <div>
      <div className="container">
        <div className="AllItems-section mt-5">
          {items.map((item) => (
            <AllItems
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></AllItems>
          ))}
        </div>
        <div className="add-more">
          <Link
            className="text-white fw-bold pe-auto text-decoration-none"
            to="/dashboard/addProduct"
          >
            <button className="text-center btn hero-btn mt-3">Add More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageAllProduct;