import './App.css';
import React from 'react';
import styled from 'styled-components'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LoginPage from './components/Login/login';
import {Routes, Route, useNavigate, useLocation, BrowserRouter} from "react-router-dom";
import SearchPage from './components/searchPage/searchPage';
import ResultPage from './components/resultPage/resultPage';

function App() {
  const [auth,setAuth] = React.useState(false);
  return (
    <BrowserRouter>
        <Header auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path={"/"} exact element={<Main auth={auth} />} />
          <Route path={"/authorization"} element={<LoginPage setAuth={setAuth} auth={auth} />} />
          <Route path={"/search"} element={<SearchPage />} />
          <Route path={"/result"} element={<ResultPage />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
