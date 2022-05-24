

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReviews from './Pages/AddReviews/AddReviews';
import Login from '../src/Pages/Auth/Login';
import RequireAuth from '../src/Pages/Auth/RequireAuth';
import Signup from '../src/Pages/Auth/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import DashBoard from './Pages/DashBoard/DashBoard';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import MyProfile from './Pages/MyProfile/MyProfile';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Users from './Pages/DashBoard/Users';
import Purchase from './Pages/Home/Purchase/Purchase';
import RequireAdmin from './Pages/Auth/RequireAdmin';
import AddProduct from './Pages/DashBoard/AddProduct';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/item/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/addReviews' element={<RequireAuth><AddReviews/></RequireAuth>}/>
        <Route path='/myOrder' element={<RequireAuth><MyOrder/></RequireAuth>}/>
        <Route path='/dashboard' element={<RequireAuth><DashBoard/></RequireAuth>}>
          <Route index element={<MyOrder/>}></Route>
          <Route path='reviews' element={<AddReviews/>}></Route>
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;