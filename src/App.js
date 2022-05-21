

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='myProfile' element={<MyProfile/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;