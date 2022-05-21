

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddReviews from './Pages/AddReviews/AddReviews';
import Login from './Pages/Auth/Login/Login';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import Signup from './Pages/Auth/Signup/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import MyProfile from './Pages/MyProfile/MyProfile';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/addReviews' element={<RequireAuth><AddReviews/></RequireAuth>}/>
        <Route path='/myOrder' element={<RequireAuth><MyOrder/></RequireAuth>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;