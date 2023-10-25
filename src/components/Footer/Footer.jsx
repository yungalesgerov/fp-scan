import React from "react";
import logo from './eqw 1.svg';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const FooterDiv = styled.div`
    width: 1440px;
    height: 137px;
    border: 1px solid green;
    background-color: #029491;
    display: flex;
    img {
        cursor:pointer;
        margin-left: 60px;
        width: 141px;
        height: 141px;
    }
    .footer-info {
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        line-height: 16.94px;
        width: 199px;
        height: 87px;
        margin-left: 995px;
        margin-top: 25px;
        color: #fff;
    }
    .copyright {
        margin-top: 21px;
    }
`


const Footer = () => {
    const navigate = useNavigate();
    return (
        <FooterDiv  onClick={()=>navigate('/')}>
            <img src={logo} alt="logo" className="footer-logo" />
            <div className="footer-info">
                <div>г. Москва, Цветной б-р, 40
                    <br />+7 495 771 21 11
                    <br />info@skan.ru</div>
                    <div className="copyright">Copyright. 2022</div>
                <div></div>
            </div>
        </FooterDiv>
    )
}
export default Footer;