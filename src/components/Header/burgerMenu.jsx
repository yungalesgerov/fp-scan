import React, { useState } from "react";
import styled from "styled-components"
import logo from './eqw 1.svg';
import close from './Group 6.svg';
import { slide as Menu } from 'react-burger-menu';
import { useNavigate } from "react-router-dom";
const ContentDiv = styled.div`
    width:375px;
    height:491px;


`
const Button = styled.button`
    width:295px;
    height:52px;
    color:black;
    font-size:20px;
    line-height:24px;
    background-color: #7CE3E1;
    border:none;
    border-radius:5px;
    cursor:pointer;
`
const Bar = styled.span`
  display: block;
  width: 30px;
  height: 5px;
  margin-bottom: 7px;
  background-color: #029491;
`
const showSettings = (event) => {
    event.preventDefault();
}

const BurgerMenu = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    return (
        <><Menu >
            <img src={logo} alt="logo" />
            <img src={close} alt="close" />
            <a id="home" className="menu-item" href="#">Главная</a>
            <a id="about" className="menu-item" href="#">Тарифы</a>
            <a id="contact" className="menu-item" href="#">FAQ</a>
            <span>Зарегистрироваться</span>
            <Button onClick={() => { navigate('/authorization'); setOpen(false) }}>Войти</Button>

        </Menu></>
        
    )
}

export default BurgerMenu;