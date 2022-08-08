
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainPage from './Components/MainPage';
import NavMenu from './Components/NavMenu';
import Footer from './Footer';
import Main from './Main';
import { createClothes, createUser, createUser_Type, fetchCategories, fetchUsers, login, updateUser, updateUser_Type } from './Redux/Actions';
import Title from './Title';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';

import AllProducts from './Components/AllProducts';
import Profile from './Components/Profile';
import ProfileInfo from './Components/ProfileInfo';
import NewProducts from './Components/NewProducts'
import MProducts from './Components/MProducts';
import WProducts from './Components/WProducts';
import PorackaProizvod from './Components/PorackaProizvod';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchCategories())
  }, [])
  const userLogoutStatus = useSelector(state => state.user.user.logout)

  return (
    <div className="lg:overflow-y-hidden">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/maski" element={<MProducts />} />
        <Route path="/zenski" element={<WProducts />} />
        <Route path="/novo" element={<NewProducts />} />
        <Route path="/nfnc" element={<PorackaProizvod />} />
        <Route path="/siteproizvodi" element={<AllProducts />} />
        {userLogoutStatus === true ? <Route path="*" element={<Navigate replace to="/login" />} /> : <Fragment>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileInfo />} />
          

        </Fragment>}

      </Routes>
    </div>
  );
}

export default App;
