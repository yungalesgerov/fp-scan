import React,{useState} from "react";
import styled from "styled-components";
import pplImg from './Characters.svg';
import useSelector from "react"
import lock from './Group 1171274237.svg';
import google from './Group 1171274229.svg';
import facebook from './Group 1171274230.svg';
import yandex from './Group 1171274231.svg'
import SingUp from "../signUp/SingUp";




const Title = styled.div`
    margin:0;
    padding:0;
    width:740px;
    height:144px;
    font-size:40px;
    line-height:48px;
    font-family:ferry_black;
    margin: 0 0  14px 0;

`



const Wrapper = styled.div`
    width:1440px;
    height:673px;
    border:1px solid black;

`
const ContentDiv = styled.div`
    height:672px;
    display: flex;
    .main {
        width:745px;
        height: 501px;
        margin:69px 0 0 60px;
        img {
            margin-left:112px;
        }
    }
    .user {
        width:480px;
        height:578px;
        margin: 15px 0 0 0 ;
        position: relative;
        .userDiv {
            width:429px;
            height:523px;
            margin: 55px 0 0 51px;
            
        }
        
        .userSpans {
            width:379px;
            height:29px;
            display: flex;
            justify-content: space-between;
            margin:0 auto;
            margin-top:25px;
            margin-bottom:40px;

            span:nth-child(1) {
                width:151px;
                height:29px;
                border-bottom: 2px solid #029491;
                color: #029491;
                float:center;
                text-align:center;
            }
            span:nth-child(2) {
                color:grey;
                width:213px;
                height:29px;
                border-bottom: 2px solid #C7C7C7;
                text-align:center;
            }
        }
        .userForm {
            position:relative;
            width:379px;
            height:174px;
            background-color: none;
            margin-left:25px;
            input {
                margin:15px 0 15px;
            }
            margin-bottom: 30px;
            
        }
        .signUp {
            margin-left:25px;
            width:385px;
            height:91px;
            margin-bottom:30px;
            a {
                margin-left:112px;
                border-bottom: 1px;
                font-size:14px;
                color:#5970FF;

            }
            

        }
        .signUpWith {
            width:308px;
            height:65px;
            margin-left:25px;
            color: grey;
            div {
                display:flex;
                justify-content: space-between;
                img {
                    margin-top:15px;
                    position: relative;
                }
            }
        }
        img:nth-child(1) {
            position: absolute;
        }
    }
`

const LoginPage = ({ auth, setAuth }) => {
    const [wrongData,setWrongData] = useState(false);
 
    return (
        <Wrapper >
            <ContentDiv >
                <div className="main">
                    <Title>Для оформления подписки на тариф, необходимо авторизоваться.</Title>
                    <img src={pplImg} alt='ppl' />
                </div>
                <div className="user">
                    <img src={lock} alt="lock" />
                    <div className="userDiv">
                        <SingUp
                           wrongData={wrongData}
                           setWrongData={setWrongData} 
                           setAuth={setAuth}
                        />
                        <div className="signUpWith">
                            <span>Войти через:</span>
                            <div>
                                <a href="#"><img src={yandex} alt="yandex" /></a>
                                <a href="#"><img src={facebook} alt="facebook" /></a>
                                <a href="#"><img src={google} alt="google" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </ContentDiv>
        </Wrapper>
    )
}

export default LoginPage;
