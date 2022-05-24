import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/UseAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h1 className='text-xl text-purple-600'>DashBoard</h1>
    <Outlet></Outlet>
    
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">MyOrder</Link></li>
      <li><Link to="/dashboard/reviews">Add Reviews</Link></li>
      {admin && <>
        <li><Link to="/dashboard/users">Make Admin</Link></li>
        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
        <li><Link to="/dashboard/manageProduct">Manage All Product</Link></li>
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;