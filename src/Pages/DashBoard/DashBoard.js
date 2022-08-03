import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/UseAdmin";
import Loading from "../Shared/Loading";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if(adminLoading){
    return <Loading></Loading>
  }
  console.log(admin)
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
          {!admin && 
            <>
          <li>
            <Link to="/dashboard/myOrder">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">Add Reviews</Link>
          </li>
            </>
          }
           

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProduct">Manage All Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrder">Manage All Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
