import React, { useState } from "react";
import styled from "styled-components"
import logo from './eqw 1.svg';
import { slide as Menu } from 'react-burger-menu';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
    width:240px;
    height:52px;
    color:black;
    font-size:20px;
    line-height:24px;
    background-color: #7CE3E1;
    border:none;
    border-radius:5px;
    cursor:pointer;
`
const TextSpan = styled.span`
    width:167px;
    height:20px;
    margin-left:42px;
    font-size:16px;
    font-family:inter;
    margin-bottom:20px;
`

const Bar = styled.a`
    text-align:center;
  display: block;
  width: 80px;
  height: 19px;
  /* margin:0 auto; */
  margin-left:80px;
  margin-bottom: 28px;
  /* border:1px solid black; */
  background-color: #029491;
  color:#fff;
  text-decoration:none;
`
const showSettings = (event) => {
    event.preventDefault();
}

const BurgerMenu = ({}) => {
    
    const navigate = useNavigate();
    return (
        <><Menu >
            <img src={logo} alt="logo" />
            <Bar id="home" className="menu-item" href="#">Главная</Bar>
            <Bar id="about" className="menu-item" href="#">Тарифы</Bar>
            <Bar id="contact" className="menu-item" href="#">FAQ</Bar>
            <TextSpan>Зарегистрироваться</TextSpan>
            <Button onClick={() => { navigate('/authorization')}}>Войти</Button>
        </Menu></>
        
    )
}

export default BurgerMenu;