import './App.css';
import React,{useEffect} from 'react';
// import styled from 'styled-components'
import {selectUser} from './jsAdditions/userSlice';
import { getUserInfo } from './jsAdditions/getUserInfo';  
import { useSelector, useDispatch } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LoginPage from './components/Login/login';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import SearchPage from './components/searchPage/searchPage';
import ResultPage from './components/resultPage/resultPage';

function App() {
  const [auth,setAuth] = React.useState(false);
  const authToken = localStorage.getItem('authToken');
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && !authToken && location.pathname === '/search') {
      navigate('/');
    }
  }, [user, navigate, location]);

  useEffect(() => {
    if (authToken) {
      getUserInfo(JSON.parse(authToken), dispatch)
    }
  }, [dispatch])
  return (
    <>
        <Header auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path={"/"} exact element={<Main auth={auth} />} />
          <Route path={"/authorization"} element={<LoginPage setAuth={setAuth} auth={auth} />} />
          <Route path={"/search"} element={<SearchPage />} />
          <Route path={"/result"} element={<ResultPage />} />
        </Routes>
        <Footer/>
    </>
    
  );
}

export default App;
