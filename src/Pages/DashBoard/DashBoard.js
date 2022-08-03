import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { MdDashboardCustomize } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { GiAchievement } from 'react-icons/gi';
import { MdAddCircle } from 'react-icons/md';
import { MdSettingsInputComponent } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';
import auth from "../../firebase.init";
import useAdmin from "../Hooks/UseAdmin";
import Loading from "../Shared/Loading";
import './Dashboard.css'

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
        <ul className="menu sidebox-drawer p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <li>
            <Link to="/dashboard"><MdDashboardCustomize/>Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/myProfile"><FaUser/>My Profile</Link>
          </li>
          {!admin && 
            <>
          <li>
            <Link to="/dashboard/myOrder"><HiShoppingCart/> My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews"><GiAchievement/> Add Reviews</Link>
          </li>
            </>
          }
           

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users"> <FaUserEdit/>Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct"><MdAddCircle/>Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProduct"><MdSettingsInputComponent/> Manage All Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrder"><FaShoppingBasket/> Manage All Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
